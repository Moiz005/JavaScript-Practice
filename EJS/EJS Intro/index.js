import express from 'express';

const port = 3000;
const app = express();

app.get('/' , (req , res)=>{
    const d = new Date();
    const wday = d.getDay();
    let whichday = "weekday";
    let adv = "work hard today";
    if(wday === 0 || wday === 6){
        whichday = "weekend";
        adv = "have fun today";
    }
    res.render('index.ejs',{
        day: whichday,
        advice: adv,
    });
});

app.listen(port , ()=>{
    console.log(`server is live on ${port}`);
});