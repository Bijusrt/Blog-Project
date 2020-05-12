const knex = require('../model/connector');

var jwt = require('jsonwebtoken');


module.exports = (req,res)=>{

    if (req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password')){

        let userName = req.body.username;
  
        let passWord = req.body.password;

        knex.select().from('blog_login').then(result=>{

            var user_Flag = true;

            var password_Flag = true;

            for (var i of result){

                if (i.UserName === userName){

                    user_Flag = false;
                
                    if (i.PassWord === passWord){

                        password_Flag = false;

                        jwt.sign(userName,'athuragasiyam',(err,token)=>{

                            if (err) throw err;

                            res.json(token)

                        })
                
                    }
                
                }
            
            }

            if (user_Flag){

                res.status(404).json('Invalid Username!');
            
            }else if(password_Flag){

                res.status(404).json('Incorrect Password!')
            }
        
        }).catch(err=>{

            res.send(err)

        })
    }else {

        res.status(404).json("The Required Fields For Login Are : \n 1.Username \n 2.Password \n\t Please Enter All The Required Fields!")
        
    }
};