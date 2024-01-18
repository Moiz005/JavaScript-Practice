import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
// Custom middleware
function logger (req, res, next){
  console.log("Request method : ", req.method, "The url : ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
