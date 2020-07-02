const express = require('express')
const soutenance = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Soutenance = require('../models/Soutenance')
soutenance.use(cors())
process.env.SECRET_KEY = 'secret'
soutenance.get('/soutenance', (req, res) => {
 Soutenance.findAll().then(soutenance => {
    console.log(soutenance);
}).catch(function (e) {
    //gestion erreur
    console.log(e);
});
})
module.exports = soutenance
