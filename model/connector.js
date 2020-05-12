var knex = require('knex')({

    client: 'mysql',
    
    connection: {
    
        host : 'localhost',
    
        user : 'root',
    
        password : 'paranthaman',
    
        database : 'blog_project'
    
    }
 
});

module.exports = knex;