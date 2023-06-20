const Student = require('../module/student');
const Interview = require('../module/Interview');
const InterviewList = require('../module/InterviewList');

// Fetching all the data and sending to DOM
module.exports.homeController = async (req,res)=>{
   const student = await Student.find({}); 
   const interview = await Interview.find({});
   const interviewList = await InterviewList.find({});
   return res.render('index',{
      title: 'Home',
      students: student,
      interview:interview,
      interviewList,interviewList
   });
}