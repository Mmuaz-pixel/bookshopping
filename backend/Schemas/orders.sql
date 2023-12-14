CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    total_amount DECIMAL(10, 2) NOT NULL,
    placement_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);