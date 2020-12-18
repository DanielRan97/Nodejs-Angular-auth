require('../data/database');
const express = require('express');
const router = express.Router();
const userModel = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('HELLO AUTH');
})

router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send('ALL Fields are required!!');
        return;
    }

    userModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (!user) {
                res.status(400).send('LOGIN FAILED!');
            } else {
                
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) { throw err; };
                    if (result) {
                         let payload = {subject: user._id};
                         let token = jwt.sign(payload , 'secretKey');
                         res.status(200).send({token});
                    } else {
                        res.status(400).send('LOGIN FAILED!');
                    }
                })

            }
        }
    })
})


router.post('/register', (req, res) => {
    let userData = req.body;
    if (userData.email && userData.password) {
        bcrypt.hash(userData.password, 10 , (err, hash) =>{
            let user = new userModel({email:userData.email, password: hash});
            user.save((err, registeredUser) => {
                if (err) {
                    console.log(err)
                } else {
                   let payload = {subject: user._id};
                   let token = jwt.sign(payload , 'secretKey');
                   res.status(200).send({token});
                }
            }
            )
                    })
                }
            })
      



module.exports = router;