const Interview = require('../module/Interview');
const Student = require('../module/student');
const InterviewList = require('../module/InterviewList');

module.exports.addInterview = async(req,res)=>{
    try{
    const Company = req.body;
    
    // Check if company is already exist or not
    const company = await Interview.findOne({companyName:Company.companyName});
    if(company){
        return res.status(400).json({message:"Company is already exist"});
    }

    const newCompany = Interview(Company);
    await newCompany.save();
    res.status(201).redirect('back');
    }catch(err){
        console.log(err);
        res.status(400).json({message:err.message});
    }
}

module.exports.allotedInterview = async(req,res)=>{
    try{
        let candidateEmail = req.body.candidateEmail;
        let interviewId = req.body.interviewId;

        // Finding out Email and Company
        const candidate = await Student.findOne({email:candidateEmail});
        const company = await Interview.findById(interviewId);

        // check if candidate exist or not
        if(!candidate){
            return res.status(404).redirect('back');
        }

        // check if candidate has already been alloted for the interview
        if(company.candidates.includes(candidate.id)){
            return res.status(400).redirect('back');
        }

        // Other wise push the candidate id in the company candidate Array
        company.candidates.push(candidate.id);
        company.save();

        // now create an object of the  which we have to save in InterviewList 
        const newEntry = {
            companyName: company.companyName,
            candidateEmail : candidate.email,
            college : candidate.college,
            batch : candidate.batch,
            DSA_Score:candidate.DSA_Score,
            webD_Score:candidate.webD_Score,
            react_Score:candidate.react_Score,
            status:candidate.status,
            interviewDate : company.date,
            result:'OnHold'
        }

        // saving in the data base
        const newInterview = InterviewList(newEntry);
        await newInterview.save();
        console.log('interview Alloted Successfully')

        return res.status(200).redirect('back');
    }catch(err){
        console.log(err);
        res.status(400).json({message:err.message});    
    }
}


// Update Result 
module.exports.updateResult = async(req,res)=>{
    try{
        // Query Values
        let interviewId = req.query.interviewId;
        let result = req.query.result;
        
        // update InterviewList
        await InterviewList.findByIdAndUpdate(interviewId, {result:result});
        console.log('Result Updated Successfully');
        return res.status(200).redirect('back');
        
    }catch(err){
        console.log(err);
    }
}
