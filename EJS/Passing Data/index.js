import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
  var letters = req.body['fName'].length;
  letters += req.body['lName'].length;
  res.render('index.ejs', { Question: 'The name has ' + letters + ' in it' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
