const express = require('express')
const app = express()
const dotenv = require('dotenv');
const cors = require('cors');

const categoriesRouter = require("./routes/category.js");

dotenv.config();

app.use(express.json());
app.use(cors());

//routing
app.use('/home',categoriesRouter);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server jalan pada server localhost:${port}`)
})