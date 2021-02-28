const { User } = require('../models/user');
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');

const password = "admin1234"
const saltRounds = 10

bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
        throw err
    } else {
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
                throw err
            } else {
                var user = {
                    request: true,
                    name: "moise",
                    email: "moise@gmail.com",
                    password: hash,
                    role: "Administrator",
                    isAdmin: true,
                    created: new Date(),
                    privileges: {
                        create: true,
                        delete: true,
                        read: true,
                        update: true
                    }
                }


                if (user.name === 'moise') {
                    console.log('Admin is already created')
                } else {
                    User.create(user, function (err) {
                        if (err) {
                            throw err;
                        } else {
                            console.log(user)
                            console.log('The admin created')
                        }
                    });

                }
                //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
            }
        })
    }
})
