const express = require('express');
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/ToDoController');
const router = express.Router();

router.get('/api/todos', getToDo);
router.post('/api/todos', saveToDo);
router.put('/api/todos/:id', updateToDo); // Updated route
router.delete('/api/todos/:id', deleteToDo); // Updated route

module.exports = router;