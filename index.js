const express = require('express');

const app = express();

const morgan = require('morgan');

const router = express.Router();


app.use(express.json());

app.use(morgan("dev"));



app.use(require('./router/signup'));

app.use(require('./router/login'));

app.use(require('./router/post'));

app.use(require('./router/put'));

app.use(require('./router/delete'));

app.use(require('./router/get'));


app.use((req,res,next)=>{

    var error = new Error("Could Not Find What You Expected! ")
    
    error.status = 404;
    
    next(error);

});

app.use((error,req,res,next)=>{

    // console.log(error);
    
    error.status = (error.status || 500 );
   
    res.json({
   
        message:error.message
   
    })

});

var port = 8080

app.listen(port,()=>{

    console.log(`Server Loaded Successfully! At ${port}`);
    
});