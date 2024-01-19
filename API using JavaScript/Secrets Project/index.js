import express from 'express'
import axios from 'axios'

const app = express();
const port = 3000;
const URL = 'https://secrets-api.appbrewery.com';

app.use(express.static('public'));

app.get('/' , async (req , res)=>{
    try{
        let response = await axios.get('https://secrets-api.appbrewery.com/random');
        let result = response.data;
        res.render('index.ejs',{data: result});
    }
    catch(error){
        console.error(error);
    }
});

app.listen(port , ()=>{
    console.log(`Litsening on server ${port}`);
});