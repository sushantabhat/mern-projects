const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
    try {
        const todo = await ToDoModel.create({ text });
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.updateToDo = async (req, res) => {
    const { id } = req.params; // Get ID from URL params
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    try {
        const todo = await ToDoModel.findById(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        todo.text = text;
        await todo.save();
        return res.status(200).json(todo);
    } catch (error) {
        console.error('Update error:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid todo ID format' });
        }
        return res.status(500).json({ error: 'Failed to update todo' });
    }
}

module.exports.deleteToDo = async (req, res) => {
    const { id } = req.params; // Get ID from URL params
    try {
        const todo = await ToDoModel.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        return res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Delete error:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid todo ID format' });
        }
        return res.status(500).json({ error: 'Failed to delete todo' });
    }
}
