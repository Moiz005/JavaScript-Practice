import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/' , (req,res)=>{
    res.render('index.ejs');
});

app.post('/submit' , (req,res)=>{
    res.render('blog.ejs',{blogs: req.body['blog']});
    // console.log(req.body['blog']);
});

app.listen(port , ()=>{
    console.log(`Server is live on ${port}`);
});