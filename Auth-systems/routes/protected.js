const express = require('express');
const { authenticateToken, authorizeRole } = require('../middleware/auth');
const router = express.Router();

router.get('/user', authenticateToken, (req, res) => {
  res.json({ message: 'Protected user route', user: req.user });
});

router.get('/admin', authenticateToken, authorizeRole(['admin']), (req, res) => {
  res.json({ message: 'Protected admin route', user: req.user });
});

module.exports = router;