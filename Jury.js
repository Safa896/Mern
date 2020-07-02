const express = require('express')
const Jury = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const jury = require('../models/Jury')
Jury.use(cors())
process.env.SECRET_KEY = 'secret'
Jury.get('/login', (req, res) => {
    jury.findOne({
        where: {
          idjury: "123"
        }
      })
    })
    Jury.post('/login', (req, res) => {
        console.log(req.body)
       
        jury.findOne({
          where: {
            idjury: req.body.idjury
          }
        })
        .then(Jury => {
          if(Jury)
          {  
            if (req.body.idjury===etudiant.idjury) {
           
              res.send("Un jury doit se connecter") }
              else {
                res.send("Jury")
              }
            }
            else
            {
              res.send("not ok")
            }
          });
          jury.findAll().then(Jury => {
            console.log(Jury);
        }).catch(function (e) {
            //gestion erreur
            console.log(e);
        });
    })
    module.exports = Jury