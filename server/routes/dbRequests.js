const express = require('express');
const router = express.Router();
// Get database
const db = require('../../models/testModel');

// Route to get todos
router.get('/', async (req, res) => {
  try {
  // Create query to find all todos
  const query = 'SELECT * FROM "public"."todo"'
  const results = await db.query(query);
  res.status(200).json(results.rows);
  }
  catch(err) {
    console.log(err);
  }
})

router.post('/', async (req, res) => {
  console.log('bob')
  try {
    // Grab the res from request query
    console.log('bob')
    const newTodo = req.query;
    console.log(newTodo)
  }
  catch(err) {
    console.log(err)
  }
}) 

module.exports = router;