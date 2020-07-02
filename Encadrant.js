const express = require('express')
const encadrant = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Encadrant = require('../models/Encadrant')
encadrant.use(cors())
process.env.SECRET_KEY = 'secret'
encadrant.get('/login', (req, res) => {
    Encadrant.findOne({
        where: {
          idencadrant: "122"
        }
      })
    })
    encadrant.post('/login', (req, res) => {
        console.log(req.body)
       
        Encadrant.findOne({
          where: {
            idencadrant: req.body.idencadrant
          }
        })
        .then(encadrant => {
          if(encadrant)
          {  
            if (req.body.idencadrant==encadrant.idencadrant) {
           
              res.send("Un encadrant doit se connecter") }
              else {
                res.send("encadrant")
              }
            }
            else
            {
              res.send("not ok")
            }
          });
          Encadrant.findAll().then(encadrant => {
            console.log(encadrant);
        }).catch(function (e) {
            //gestion erreur
            console.log(e);
        });
    })
    module.exports = encadrant