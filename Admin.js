
const express = require('express')
const admin = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const admins = require('../models/Agentadministratif')
admin.use(cors())
process.env.SECRET_KEY = 'secret'
admin.get('/login', (req, res) => {
    admins.findOne({
        where: {
          idagentadministartif: "1"
        }
      })
    })
    admin.post('/login', (req, res) => {
        console.log(req.body)
       
        admins.findOne({
          where: {
            idagentadministartif: req.body.idagentadministartif
          }
        })
        .then(admin => {
          if(admin)
          {  
            if (req.body.idagentadministartif==admin.idagentadministartif) {
           
              res.send("Un admin doit se connecter") }
              else {
                res.send("admin")
              }
            }
            else
            {
              res.send("not ok")
            }
          });
          admins.findAll().then(admin => {
            console.log(admin);
        }).catch(function (e) {
            //gestion erreur
            console.log(e);
        });
    })
    module.exports = admin