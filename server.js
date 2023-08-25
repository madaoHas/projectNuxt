const multer  =   require('multer');
const express = require('express')
const fs = require("fs")
const app = express()
const port = 3333
const filePath = "./news.json";

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, "static/img");
  },
  filename: (req, file, cb) =>{
    cb(null, file.originalname);
  }
});

const upload = multer({storage:storageConfig})


app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.get('/news:page', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  const page = req.params.page.substring(1);
  const content = fs.readFileSync(filePath,"utf8");
  const news = JSON.parse(content);

  let idNews = 0
  if (page > 1) {
    idNews = (page - 1) * 6;
  }
  let newNews = [];
  for (let item = 0; item < 6; item++) {
    if (idNews+item < news.news.length) {
      newNews.push(news.news[idNews+item])
    }
  }
  res.send({news: newNews, total: news.news.length})
})
app.get('/news/item/id:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  const id = req.params.id.substring(1);
  const content = fs.readFileSync(filePath,"utf8");
  const news = JSON.parse(content);
  let newNews = news.news.filter((item) => item.id == id)
  res.send(newNews)
})

app.post('/news/add', upload.single('img'), (req, res) => {
  const content = fs.readFileSync(filePath,"utf8");
  const news = JSON.parse(content);
  let id = news.news[news.news.length - 1].id + 1
  let newRecord = req.body
  newRecord.id = id;
  newRecord.img = '/img/'+req.file.filename
  news.news.push(newRecord)
  fs.writeFileSync(filePath, JSON.stringify(news))
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


