"use strict";

const express = require("express");
const app = express();

app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug')
app.route("/views").get((req, res) => {
  //Change the response to render the Pug template
  //res.send(`Pug template is not defined.`);
  res.render('index')
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT);
});
