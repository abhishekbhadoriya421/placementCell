const Employee = require('../module/employee');
// Login Page Render
module.exports.logInPage = async(req,res)=>{

    return res.render('loginPage',{
        title: 'Login',
    })
}

// SignUp Page Render
module.exports.signUpPage = async(req,res)=>{
    return res.render('signupPage')
}

// Function to check if password and confirm password are same or not
function isBothPasswordsAreSame(password,confirmPassword){
    if(password!==confirmPassword){
        return false;
    }
    return true;
}


// create (sign Up new Account)
module.exports.create = async (req,res)=>{
    try{
        const user = req.body;
        if(!isBothPasswordsAreSame(user.password,user.confirm_Password)){
            console.log('Password are not same');
            return res.redirect('back');
        }

        const isUserExist = await Employee.findOne({email: user.email});

        // If user Already have account then we let user know that he has Registered Account
        if(isUserExist){
            console.log('user is having Already an account');
            return res.redirect('back');
        }

        // If user don't have account then create new one
        const newUser = new Employee(user);
        await newUser.save();
        console.log('user is created');

        return res.status(201).redirect('loginPage');
    }catch(err){
        console.log('error While CreatingSession ',err);

    }
}

// createSession (sign Up new Account)
module.exports.createSession  = function(req,res){
    return res.status(200).redirect('/');
}

// destroy Session
    module.exports.destroySession = function(req,res){
        req.logout(function(err) {
            if (err) {
                console.log(err);
                return
            }
            return res.redirect('/');
        });
    }