import express from 'express';
import mongoose from 'mongoose';
//import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import routes from './src/route/crmRoute';
import cors from 'cors';
//import jsonwebtoken, { decode } from 'jsonwebtoken';


const app = express();
const PORT = 5000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/backend', {
    useNewUrlParser:true,
    useUnifiedTopology:true
    
});

app.use(express.static(__dirname+'./upload/'));

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*jwt setup
app.use((req,res,next)=>{
    if(req.headers && req.headers.authorization && req.header.authorization.split(' ')[0]==='JWT')

{
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1],'RESTFULAPIs',(err,decode)=>{

    if(err) req.user=undefined;
    req.user=decode;
     next();
    });

}
else{
 req.user=undefined;
next();
}

})*/

//cors
app.use(cors());

routes(app);

// serving static files
app.use(express.static('public'));


app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);