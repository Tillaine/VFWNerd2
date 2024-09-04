const dotenv = require("dotenv")
dotenv.config()
const mongoKey = process.env.DB_KEY;
const express = require('express');
const mongoose = require('mongoose'); 
const uri = `mongodb+srv://brittanybartges:${mongoKey}@mernlist.zg7wekf.mongodb.net/?retryWrites=true&w=majority&appName=mernList`;
const cors = require('cors');
const data = require('./mockData')


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose
  .connect(  uri
  )
  .then(result => {
    app.listen(3000);
  })
  .catch(err => console.log('err', err))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// DB Model 
const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
  });

//   const Todo = mongoose.model('Todo', todoSchema);

  app.get('/allState', async (req, res) => {
    console.log('$$$$$%%$', data)
    // const todos = await Todo.find();
    res.json({data});
  });