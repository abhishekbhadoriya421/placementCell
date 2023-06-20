const passport =  require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Employee = require('../module/employee');

// Setting Local Authentication
passport.use(new LocalStrategy({
    usernameField: 'email', // set usernameField to email, it's necessary if using email or other thing to be authenticate
    password : 'password',
},
async function(email,password,done){
    try{
        const employee = await Employee.findOne({email:email});
        // if user and password is not found or matched the user is not authenticate
        if(!employee || employee.password != password){
            done(null,false);
        }
        // if user is found and password is matched the user is authenticate
        done(null,employee);
    }
    catch(err){
        done(err,false);
    }
}
));

// serialize User id as unique key for check authentication and stored in cookie
passport.serializeUser(function(employee,done){
    done(null,employee.id);
})

// deserializing the user from the key in the cookies
passport.deserializeUser(async function(id,done){
    try{
        const employee = await Employee.findById(id);
        done(null,employee);
    }catch(err){
        done(err,false);
    }
})

// Check Authentication Middleware
passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }  
    return res.redirect('/user/loginPage');
}

// set Authentication Middleware
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}