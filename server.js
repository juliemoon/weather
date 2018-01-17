const express = require("express");
const app = express();
const path = require("path");

app.get('/', (req, res) => {
  res.set({ 'content-type': 'text/html, charset=utf-8' });
  res.sendFile(path.join(__dirname, 'index.html'))
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))