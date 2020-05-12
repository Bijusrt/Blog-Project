const knex = require('../model/connector');

module.exports = (req,res)=>{

    if(req.body.hasOwnProperty('blogName_for_update') && req.body.hasOwnProperty('blogProperty_for_update') && req.body.hasOwnProperty('content_for_update')){
        
        let blogName_for_update = req.body.blogName_for_update;

        let blogProperty_for_update = req.body.blogProperty_for_update;

        let content_for_update = req.body.content_for_update;

        knex('blog_details').where('BlogName',blogName_for_update).update(blogProperty_for_update, content_for_update).then(result=>{

            res.json('Successfully Updated!')

        }).catch(err=>{

            res.send(err)

        })
    }else{

        res.status(404).json('The Required Fields To Update A Blog Are : \n 1.BlogName_for_update \n 2.BlogProperty_for_update \n 3.Content_for_update \n\t Please Enter All The Requirements!')
    }
};