const express = require("express");
const app = express();
const path = require("path");

app.get('/', (req, res) => {
  res.set({ 'content-type': 'text/html, charset=utf-8' });
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.js',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.js'));
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))