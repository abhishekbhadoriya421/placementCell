const AddStudentBtn = document.getElementById('AddStudent');
const AddInterviewBtn = document.getElementById('AddInterview');
const addStudentForm = document.getElementsByClassName('addStudentForm')[0];
const addInterviewForm = document.getElementsByClassName('addInterviewForm')[0];
const studentAndInterviewFormContainer = document.getElementsByClassName('studentAndInterviewFormContainer')[0];
const closeInterviewFrom = document.getElementById('closeInterviewFrom');
const closeStudentFrom = document.getElementById('closeStudentFrom');

// Student Form is visible when Add student Button is clicked
AddStudentBtn.addEventListener('click',()=>{
    studentAndInterviewFormContainer.style.display = 'block';
    addStudentForm.style.display = 'block';

    // None display of buttons
    AddStudentBtn.style.display = 'none';
    AddInterviewBtn.style.display = 'none';
})

// Interview Form is visible when Add Interview Button is clicked
AddInterviewBtn.addEventListener('click',()=>{
    studentAndInterviewFormContainer.style.display = 'block';
    addInterviewForm.style.display = 'block';

     // None display of buttons
     // None display of buttons
    AddStudentBtn.style.display = 'none';
    AddInterviewBtn.style.display = 'none';

})

// close Interview Form
closeInterviewFrom.addEventListener('click',()=>{
    addInterviewForm.style.display = 'none';
    studentAndInterviewFormContainer.style.display = 'none';
    // display of buttons
    AddStudentBtn.style.display = 'block';
    AddInterviewBtn.style.display = 'block';
});


// close Student Form
closeStudentFrom.addEventListener('click',()=>{
    addStudentForm.style.display = 'none';
    studentAndInterviewFormContainer.style.display = 'none';
    // display of buttons
    AddStudentBtn.style.display = 'block';
    AddInterviewBtn.style.display = 'block';
});