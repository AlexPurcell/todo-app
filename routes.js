const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    res.render('index', { items: todos })

})


let todos = [];

let DoubleFilter = false

router.post("/add_todo", (req, res) => {
// Next Step: IF there is a TODO that is the same exact thing, I should check to see if it is equal to the same input then throw an error.

const addTodo = (todos, newItem) => {
  const isTodoPresent = todos.some((todos) => todos.title === newItem);
  if(isTodoPresent) {
    console.log("Error: TODO already exists")
    return todos;
  }
  return todos.concat({title: newItem, completed: false})
}

todos = addTodo(todos, req.body.add_todo_input);

    res.redirect("/")
  });


module.exports = router