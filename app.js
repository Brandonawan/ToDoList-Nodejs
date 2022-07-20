const express = require('express')
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

const items = [];
const workItems = [];

// Set EJS as templating engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {

  const day = date.getDate();

  res.render('list', {listTitle:day, newListItems:items});
});

app.post("/", function(req, res){

  const todo = req.body.item;

  if (req.body.list === "Work"){
      // display the result
    workItems.push(todo);
    res.redirect("/work");
  }else{
    items.push(todo);
    res.redirect("/");
  }
  });

  app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work list", newListItems:workItems})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})