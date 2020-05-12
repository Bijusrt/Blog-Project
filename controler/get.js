const knex = require('../model/connector');

exports.getAll = (req,res)=>{

    knex.select().from('blog_details').then(result=>{

        res.json(result)

    }).catch(err=>{
        
        res.send(err)

    })
};

exports.getAuthor = (req,res)=>{

    const author_list = [];

    knex('blog_details').where("Author",req.params.author).then(result=>{

        if (result.length == 0){

            res.json("Invalid Author Or The Author Has No Blogs!")

        }else{
            
            res.json(result)

        }

    }).catch(err=>{
        
        res.send(err)

    })

};