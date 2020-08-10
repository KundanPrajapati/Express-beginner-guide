const express = require("express");
const app = express(); //our web server
const calc_router = require("./routers/calc")

/*
const http = require('http')
console.log(http.STATUS_CODES)
console.log(http.METHODS)
*/
//console.log(calc_router)
app.use("/calc", calc_router);
app.get("/", (req, res) => {
  let h1 = '<h1>HELLO!</h1>'
  let p = '<p>Paragraph</p>'
  let html = h1 + p
  res.send(html)
});

  
// app.get("/old", (req, res) => {
//   res.redirect(301, "/new");//301 represend moved perminantly
// });
// app.get("/new", (req, res) => {
//   res.send("<h1>NEW</h1>");
// });

app.listen(3000, () => {
  console.log("Listenning on port 3000");
});
