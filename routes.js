const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    res.render('index', { items: todos })

})


let todos = [];


router.post("/add_todo", (req, res) => {

  todos.push({ title: req.body.add_todo_input, complete: false });
    res.redirect("/")

   
  });


module.exports = router