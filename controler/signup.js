const knex = require('../model/connector');

module.exports = (req,res)=>{

   if (req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password') && req.body.hasOwnProperty('firstname') && req.body.hasOwnProperty('lastname')){ 

        let signup_dic = {};

        signup_dic['username'] = req.body.username;

        signup_dic['password'] = req.body.password;

        signup_dic['firstname'] = req.body.firstname;

        signup_dic['lastname'] = req.body.lastname;

        knex.select().from('blog_login').then(result=>{

            let flag = true;

            for (var i of result){

                if (i.UserName === signup_dic.username){

                    flag = false;

                    res.json('    UserName Already Taken! Please Enter A Different UserName!    ');
                }
            }

            if (flag == true){

                knex('blog_login').insert(signup_dic).then(result=>{

                    res.json('  Successfully Registered!  ');
                }).catch(err=>{

                    res.send(err)

                })
            }
        }).catch(err=>{

            res.send(err)

        })
    }else {

        res.status(404).json("The Required Fields For Signup Are : \n 1.Username \n 2.Password \n 3.Firstname \n 4.Lastname \n\t Please Enter All The Required Fields!")

    }

};