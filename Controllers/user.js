let models = require("../models");
let bcrypt = require("bcrypt");
const passport = require("passport");
const myPassport = require("../passport_setup")(passport);
let flash = require("connect-flash");

exports.show_login = function(req, res, next){
    res.render("user/login", {formData : {}, errors : {}})
}

exports.show_signup = function(req, res, next){
    res.render("user/signup", {formData : {}, errors : {}})
}

exports.login = function(req, res, next){
    //Authenticate and redirection
    passport.authenticate('local', {
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash : true
    })(req, res, next);   
}

const generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

exports.signup = function(req, res, next){
    const newUser = models.User.build({
        email : req.body.email,
        password: generateHash(req.body.password)
    });

    return newUser.save().then(result => {
        passport.authenticate('local', {
            //Authenticate and redirection
            successRedirect : '/',
            failureRedirect : '/signup',
            failureFlash : true
        })(req, res, next);
    })
}

exports.logout = (req, res, next){
    //destroy the session
    req.logout();
    req.destroy();
    res.redirect("/");
}