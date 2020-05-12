var jwt = require('jsonwebtoken');

module.exports = function middleware (req,res,next) {

    var authentication = jwt.verify(req.headers.authorization,"athuragasiyam")
    
    if (authentication === "bijusrt"){
    
        next()
    
    }else{
    
        res.json({data : "You are not admin! "})
    
    }

}