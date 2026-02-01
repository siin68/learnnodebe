const express = require('express');
const app = express();
const port = 3000; 

app.get('/', (req, res) => {
  res.send('ahahahahah');
});
app.post('/haha', (req, res) => {
  res.send('Post request to the homepage');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});