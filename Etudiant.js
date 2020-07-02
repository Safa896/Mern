const express = require('express')
const entudiant = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const etude = require('../models/Etudiant')
etudiant.use(cors())
process.env.SECRET_KEY = 'secret'
etudiant.get('/login', (req, res) => {
    etude.findOne({
        where: {
          idetudiant: "121"
        }
      })
    })
    etudiant.post('/login', (req, res) => {
        console.log(req.body)
       
        etude.findOne({
          where: {
            idetudiant: req.body.idetudiant
          }
        })
        .then(etudiant => {
          if(etudiant)
          {  
            if (req.body.idetudiant===etudiant.idetudiant) {
           
              res.send("Un etudiant doit se connecter") }
              else {
                res.send("Etudiant")
              }
            }
            else
            {
              res.send("not ok")
            }
          });
          etude.findAll().then(etudiant => {
            console.log(etudiant);
        }).catch(function (e) {
            //gestion erreur
            console.log(e);
        });
    })
    module.exports = etudiant