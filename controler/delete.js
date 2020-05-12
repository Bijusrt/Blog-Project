const knex = require('../model/connector');

module.exports = (req,res)=>{

    if(req.body.hasOwnProperty("blogName_to_delete")){

        let blogName_to_delete = req.body.blogName_to_delete;

        knex('blog_details').where('BlogName',blogName_to_delete).del().then(result=>{

            res.json('Successfully Deleted!')

        }).catch(err=>{

            res.send(err)

        })
    }else {

        res.status(404).json('Please Specify What To Delete!')
    }
};