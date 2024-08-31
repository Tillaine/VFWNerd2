const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const data = require('./mockData')

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// Connect to MongoDB
// mongoose.connect('mongodb://localhost/mern-stack-db', { useNewUrlParser: true, useUnifiedTopology: true });
// Define routes and middleware
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