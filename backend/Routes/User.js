const express = require('express');
const router = express.Router();

const connection = require('../Database/connection')

router.post('/signup', (req, res) => {
    const { name, email, username, password } = req.body;

    const sql = 'INSERT INTO users (name, email, username, password) VALUES (?, ?, ?, ?)';
    const values = [name, email, username, password];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error signing up:', err);
            res.status(500).json({ error: 'Error signing up' });
        } else {
            res.status(201).json({ message: 'Signup successful' });
        }
    });
});

// Login API
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT user_id FROM users WHERE email = ? AND password = ?';
    const values = [email, password];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).json({ error: 'Error logging in' });
        } else {
            if (results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(401).json(null);
            }
        }
    });
});


module.exports = router; 