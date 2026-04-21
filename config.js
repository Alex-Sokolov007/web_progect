import express from "express"
const PORT = 5000
const app = express()

app.use(express.json())
app.set('view engine', 'ejs')//ejs
app.use(express.static("views"))

export {PORT, app}