const Student = require('../module/student');

module.exports.AddStudent = async (req,res)=>{
    try{
    const student = req.body;
    // First Check if Student is already present or not
    const studentExist = await Student.findOne({email:student.email});
    if(studentExist){
        return res.status(400).json({
            message:"Student Already Exist"
        })
    }
    // create new Student
    const newStudent = new Student(student);
        await newStudent.save();
        console.log('add successfully');
        res.redirect('back');

    }catch(err){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}