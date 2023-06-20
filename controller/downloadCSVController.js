const {createObjectCsvWriter} = require('csv-writer');
const InterviewList = require('../module/InterviewList');
const Student = require('../module/student');

// Download 
module.exports.downloadCSV = async(req,res)=>{
  // Fetch and download Interview List
    let interviewList = await InterviewList.find({});

    // create CSV of downloadData
        const csvWriter = createObjectCsvWriter({
            path: 'data.csv',
            // Header How and What data should be printed in CSV
            header: [
                {id: 'id', title: 'ID'},
                {id: 'candidateEmail', title: 'Email'},
                {id: 'college', title: 'College'},
                {id: 'batch', title: 'Batch'},
                {id: 'DSA_Score', title: 'DSA_Score'},
                {id: 'webD_Score', title: 'Web_Develop_Score'},
                {id: 'react_Score', title: 'React_Score'},
                {id: 'status', title: 'Status'},
                {id: 'companyName', title: 'Company_Name'},
                {id: 'interviewDate', title: 'Interview_Date'},
                {id: 'result', title: 'Result'}
            ],
        });
        
      csvWriter.writeRecords(interviewList)
        .then(() => {
          res.download('data.csv'); // Trigger the file download
        })
        .catch((error) => {
          console.error('Error writing CSV:', error);
          res.sendStatus(500);
        });  
}