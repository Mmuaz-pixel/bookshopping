const express = require('express');
const router = express.Router();

const connection = require('../Database/connection')

router.get('/:userId', (req, res) => {

    const { userId } = req.params; 

    connection.query('SELECT * FROM books_in_cart WHERE user_id = ?', [userId], (error, result) => {
        if (error) {
            res.status(400).send(error);
        }
        else {
            res.send(result);
        }
    })
})

router.post('/add', (req, res) => {
    const { userId, ISBN, book_name, author, price } = req.body;

    const insertQuery = 'INSERT INTO books_in_cart (user_id, ISBN, book_name, author, price) VALUES (?, ?, ?, ?, ?)';
    const insertValues = [userId, ISBN, book_name, author, price];

    connection.query(insertQuery, insertValues, (error, result) => {
        if (error) {
            res.status(400).send(error);
        } else {
            // Return the ID of the newly inserted record
            res.send({ book_id: result.insertId });
        }
    });
});

router.delete('/delete', (req, res) => {
    const { cart_id } = req.body;

    const deleteQuery = 'DELETE FROM books_in_cart WHERE cart_id = ?';
    const deleteValues = [cart_id];

    connection.query(deleteQuery, deleteValues, (error, result) => {
        if (error) {
            res.status(400).send(error);
        } else {
            // Check the number of affected rows to confirm the deletion
            if (result.affectedRows > 0) {
                res.send({ message: 'Deletion successful' });
            } else {
                res.status(404).send({ error: 'Record not found' });
            }
        }
    });
});

module.exports = router; 