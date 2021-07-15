const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    res.render('index', { items: todos })

})


let todos = [];




router.post("/add_todo", (req, res) => {
// Next Step: IF there is a TODO that is the same exact thing, I should check to see if it is equal to the same input then throw an error.


// METHOD 1


// const addTodo = (todos, newItem) => {
//   const isTodoPresent = todos.some((todos) => todos.title === newItem);
//   if(isTodoPresent) {
//     console.log("Error: TODO already exists")
//     return todos;
//   }
//   return todos.concat({title: newItem, completed: false})
// }

// todos = addTodo(todos, req.body.add_todo_input);



// METHOD 2

const postedTitle = req.body.add_todo_input;


let alreadyExists = false;

for (let i = 0; i < todos.length; i++) {
  const item = todos[i];
  if(item.title === postedTitle) {
    alreadyExists = true;
    break;
  }
}

console.log('Already Exists?:', alreadyExists)

if (alreadyExists === false) {
  todos.push({title: postedTitle, complete: false})
}
else {
  console.log("This TODO already exists!")
}

    res.redirect("/")
  });


module.exports = router