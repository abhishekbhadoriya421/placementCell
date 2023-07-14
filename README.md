# placementCell

> It's a web application Where you can do the following task
* Login As an Employee
* Create a new Account (sign up)
* Add Student (if Logged In)
* Add Interview (if Logged In)
* Allot Interviews to Students (if Logged In)
* Download Student Details of All the Students who have been allotted the interview in CSV Format
* Update Student Result

  # Used Tools
  
  > programming Language and Framework
  * Nodejs 
  * Express
  * EJS
  * Bootstrap
  * css
  * Java Script

  > Library, middlewares, And Other Tools
  * passport
  * passport-local
  * mongoose
  * express-session
  * connect-mongo
  * cookie-parser
  * csv-writer
  * dotenv

  `Passpost => middleware is used for implementing Google and Local authentication strategies`
  
  `mongoose => database is used for storing user data`
  
  `express-session => is a middleware for managing session data in Express.js`
  
  `dotenv => package is used for keeping our sensitive information in a separate file not accessed by anyone`
  `csv-writer => library to write data to a CSV file and download`
  
  # File And Folder Structure
  
`assets--------------------->[css-------->(available.css, session.css, style.css)],[js------->(home.js)]`

`config--------------------->(mongoose.js, LocalStrategy.js)`

`Controller----------------->(homeController.js, sessionPageController.js, studentController.js, InterviewController.js, downloadCSVController.js)`

`Module--------------------->(employee.js, Interview.js, InterviewList.js, student.js) here {Interview contains all the company name and date of the interview} but{InterviewList contain detail of the candidate who has applied for Interview with Company Name and Date of interview  }`

`Route---------------------->(index.js, CSV.js, Interview.js, student.js, user.js)`

`Views---------------------->(addInterviewForm.ejs, addStudentForm.ejs, available.ejs, index.ejs, interviewList.ejs, loginPage.ejs, signupPage.ejs studentList.ejs)`

`index.js------------------->(root file)`

# DataBase Schema

> Employee Schema

```js
const EmployeeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

```

> Interview Schema

```js
const InterviewSchema = new mongoose.Schema({
    companyName : {
        type : String,
        required : true
    },

    date : {
        type : Date,
        required : true
    },

    candidates:{
        type : Array,
    }
},
{
    timestamps : true
});
```
> InterviewList Schema

```js

const InterviewListSchema = new mongoose.Schema({
    companyName :{
        type : String,
        required : true
    },
    candidateEmail : {
        type : String,
        required : true
    },
    college : {
        type : String,
        required : true
    },
    interviewDate : {
        type : Date,
        required : true
    },
    batch: {
        type: String,
        required: true
    },
    DSA_Score:{
        type: Number,
        required: true
    },
    webD_Score:{
        type: Number,
        required: true
    },
    react_Score:{
        type: Number,
    },
    status:{
        type: String,
        required: true
    },
    result : {
        type : String,
        required : true,
        enum : ["Pass","Fail","OnHold","DidNotAttempt"]
    }

},
{
    timestamps : true
});
```

> Student Schema

```js
const StudentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    DSA_Score:{
        type: Number,
        required: true
    },
    webD_Score:{
        type: Number,
        required: true
    },
    react_Score:{
        type: Number,
    },
    status:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});
```
