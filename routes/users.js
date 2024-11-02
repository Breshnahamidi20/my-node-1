const express = require('express');
const router = express.Router();

// Mock data for users
let users = [
  { id: 1, name: 'breshna' },
  { id: 2, name: 'sahar' },
  { id: 3, name: 'Elham' },
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ error: 'User not found' });
});

// POST new user
router.post('/', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user by ID
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// DELETE user by ID
router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
