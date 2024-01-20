import express from 'express';
import axios from 'axios'
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

let contain = '';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req,res)=>{
    res.render('index.ejs');
});

app.post('/' , async (req , res)=>{
    try{
        contain = req.body['string'];
        let response = await axios.get(`https://v2.jokeapi.dev/joke/Any?contains=${contain}`);
        let result = response.data;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
});

app.listen(port , ()=>{
    console.log(`The server is live on ${port}`);
});