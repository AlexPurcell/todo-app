const path = require('path')
const express = require('express')
const layout = require('express-layout')

const routes = require('./routes')
const app = express()

const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
  layout(),
  express.static(path.join(__dirname, 'public')),
  express.static(path.join(__dirname, 'files')),
  bodyParser.urlencoded({extended: false})
]
app.use(middlewares)

app.use('/', routes)

const port = 3000


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});