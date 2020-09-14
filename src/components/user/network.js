const express = require('express')
const response = require('../../network/response')
const controller = require('./../registerUser/controller')
const passport = require('passport');
const router = express.Router()

router.get('/', function (req, res, next) {
    const user = req.query.user
    const password = req.query.password
    console.log(user)
    console.log(password)
    controller.getUser(user,password)
    .then((messageList)=>{
        console.log(messageList)
        response.success(req, res,messageList,200)
        console.log(messageList)
    })
    .catch((error)=>{
        response.error(req, res,'Error',500,error)
    })
})

router.post('/', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true
}));




module.exports = router