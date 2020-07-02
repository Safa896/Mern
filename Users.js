  
const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())
process.env.SECRET_KEY = 'secret'
users.get('/', (req, res) => {
  User.findOne({
    where: {
      email: "maylouati1997@gmail.com"
    }
  })
  .then(users => {
    if(users)
    {  if ("maya"===users.password) {
     
      res.send("ok") }
      else {
        res.send("password not ok")
      }
    }
    else
    {
      res.send("not ok")
    }
  });
  User.findAll().then(users => {
    //on récupère ici un tableau "users" contenant une liste d'utilisateurs
    console.log(users);
}).catch(function (e) {
    //gestion erreur
    console.log(e);
});
User.findById(id, {
  include: [{model: User.Role}]
}).then(user => {
  //on peux directement afficher le nom du rôle de l'utilisateur
  console.log(user.role.name);
});
User.create({
  name: 'Test',
  email : 'test@testmail.com'
}).then(user => {
  return user.destroy();
}).then(destroy => {
  //traitement terminé...
}).catch(function (e) {
  //gestion erreur
});
})

users.post('/login', (req, res) => {
  console.log(req.body)
 
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(users => {
    if(users)
    {  
      if (req.body.password===users.password) {
     
        res.send("ok") }
        else {
          res.send("password not ok")
        }
      }
      else
      {
        res.send("not ok")
      }
    });
    Role.findAll({include: [{model: Model.User}]}).then(roles => {
      //pour chaque role on peux parcourir la liste des ses utilisateurs
      roles.forEach((role) => {
          console.log(role.name);
          role.users.forEach((user) => {
              console.log(user.name);
          });
      });
    });
})
module.exports = users
