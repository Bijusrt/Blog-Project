const knex = require('../model/connector');

module.exports = (req,res)=>{

    if (req.body.hasOwnProperty('blogName') && req.body.hasOwnProperty('blogDescription') && req.body.hasOwnProperty('Author')){

        let blog_post = {};

        blog_post.blogName = req.body.blogName;

        blog_post.blogDescription = req.body.blogDescription;

        blog_post.Author = req.body.Author;

        var flag = true;

        var blogNameFlag = true;

        knex.select().from('blog_details').then(result=>{

            for (var j of result){

                if (j.BlogName === req.body.blogName){

                    blogNameFlag = false;

                }

            }

        })

        knex.select().from('blog_login').then(result=>{

            for (var i of result){

                if (i.UserName === req.body.Author){

                    flag = false;

                    blog_post.No = i.No;

                }

            }
            knex.select().from('blog_details').then(result=>{

                if (result.length === 0){

                    blog_post.Entry_No = 1;

                }else { 

                    blog_post.Entry_No = result[(result.length)-1].Entry_No + 1;
                  
                }

                if (flag){

                    res.status(404).json("Author is not registered!")

                }else if (blogNameFlag){
        
                { 
                        knex('blog_details').insert(blog_post).then(result=>{

                            res.json("Created A New Blog Successfully!")
                        
                        }).catch(err=>{
                        
                            res.send(err)
                        
                        })
                    }

                }else(

                    res.status(404).json('A Blog Already Exists With The Same Name! Please Change The Blog Name!')
                )
            })

        }).catch(err=>{

            res.send(err)

        })
    }else{

        res.status(404).json('The Required Fields To Create A Post Are : \n 1.Blogname \n 2.Blogdescription \n 3.Author \n\t Please Enter All The Required Fields!')
    }

};




