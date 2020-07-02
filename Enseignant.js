const express = require('express')
const enseignant = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const ens = require('../models/Enseignant')
users.use(cors())
process.env.SECRET_KEY = 'secret'
enseignant.get('/login', (req, res) => {
    ens.findOne({
        where: {
          idenseignant: "123"
        }
      })
    })
    enseignant.post('/login', (req, res) => {
        console.log(req.body)
       
        ens.findOne({
          where: {
            idenseignant: req.body.idenseignant
          }
        })
        .then(enseignant => {
          if(enseignant)
          {  
            if (req.body.idenseignant===enseignant.idenseignant) {
           
              res.send("Un enseignant doit se connecter") }
              else {
                res.send("Enseignant")
              }
            }
            else
            {
              res.send("not ok")
            }
          });
    })
    module.exports = enseignant