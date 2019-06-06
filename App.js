const express = require('express');

const app = express();
app.use(express.json({type: "*/*"}));
app.use(express.urlencoded({
  extended: true
}));

const dataPoint = [];
const port = process.env.PORT || 3000;

app.get("/get", (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.json(dataPoint);
});

app.post("/post", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  dataPoint.push({
    label: req.body.label,
    company: req.body.company,
    y: req.body.y
  });

  if (res.statusMessage === 'Bad Request') {
    res.json({label: 'Erro'});
  } else {
    res.json(req.body);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});