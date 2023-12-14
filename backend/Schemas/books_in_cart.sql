CREATE TABLE books_in_cart (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    ISBN VARCHAR(20) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    book_name VARCHAR(255) NOT NULL,
    author VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
