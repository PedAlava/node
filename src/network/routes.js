const express = require('express')
const user = require('../components/user/network')
const index = require('../components/index/network')
const register = require('../components/registerUser/network')

const logout = require('../components/logout/network')
const dashboard = require('../components/dashboard/network')

const message = require('../components/message/network')

const chats = require('../components/chat/network')


const routes = function (server) {
    server.use('/', index)
    server.use('/user', user)
    server.use('/register', register)
    server.use('/logout', logout)
    server.use('/dashboard', dashboard)

    server.use('/message', message)
    server.use('/chats', chats)
    
    
}

module.exports = routes