import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
// logging
app.use(morgan('tiny'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const minimalLogger = morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
});

app.post('/submit' , minimalLogger , (req , res)=>{
  console.log(req);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
