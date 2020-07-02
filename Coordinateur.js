const express = require('express')
const coordinateur = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const coord = require('../models/Coordinateur')
coordinateur.use(cors())
process.env.SECRET_KEY = 'secret'
coordinateur.get('/login', (req, res) => {
    coord.findOne({
        where: {
          idcoordinateur: "120"
        }
      })
    })
    coord.post('/login', (req, res) => {
        console.log(req.body)
       
        coord.findOne({
          where: {
            idcoordinateur: req.body.idcoordinateur
          }
        })
        .then(coordinateur => {
          if(coordinateur)
          {  
            if (req.body.idcoordinateur===enseignant.idcoordinateurt) {
           
              res.send("Un coordinateur doit se connecter") }
              else {
                res.send("coordinateur")
              }
            }
            else
            {
              res.send("not ok")
            }
          });
    })
    module.exports = coordinateur