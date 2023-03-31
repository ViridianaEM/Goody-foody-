const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

  router.get('/:id', getUser, (req, res) => {
    res.json(res.user);
  });
  
  async function getUser(req, res, next) {
    try {
      user = await User.findById(req.params.id);
      if (user == null) {
        return res.status(404).json({ message: 'Cannot find user' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.user = user;
    next();
  }

  
  router.post('/', async (req, res) => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      address: req.body.address,
    });
  
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  
  router.patch('/:id', getUser, async (req, res) => {
    if (req.body.firstName != null) {
      res.user.firstName = req.body.firstName;
    }
    if (req.body.lastName != null) {
      res.user.lastName = req.body.lastName;
    }
    if (req.body.email != null) {
      res.user.email = req.body.email;
    }
    if (req.body.password != null) {
      res.user.password = req.body.password;
    }
    if (req.body.role != null) {
      res.user.role = req.body.role;
    }
    if (req.body.address != null) {
      res.user.address = req.body.address;
    }
  
    try {
      const updatedUser = await res.user.save();
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  
  router.delete('/:id', getUser, async (req, res) => {
    try {
      await res.user.remove();
      res.json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  
  module.exports = router;
