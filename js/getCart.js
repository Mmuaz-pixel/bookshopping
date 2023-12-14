document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('user_id');

    if (!token) {
        // Redirect to the login page if no token is found
        window.location.href = 'login.html';
    }

    const results = await fetch('http://localhost:5000/cart/', {
        method: 'GET', body: JSON.stringify({
            userId: token
        })
    })

    const deleteCartItem = async(cartId) => 
    {
        try{
            await fetch('http://localhost:5000/cart/delete', {method: 'DELETE', body: JSON.stringify({
                cart_id: cartId
            })})
            alert("Item removed")
        }
        catch 
        {
            alert("Error removing item")
        }
    }

    var cartContainer = document.getElementById("cartContainer");

    // Clear existing content
    cartContainer.innerHTML = '';

    // Loop through cart items and create HTML elements
    results.forEach(function (item) {
        var cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";

        // Create and append elements for ISBN, author, book name, and price
        var isbnElement = document.createElement("p");
        isbnElement.textContent = "ISBN: " + item.ISBN;

        var authorElement = document.createElement("p");
        authorElement.textContent = "Author: " + item.author;

        var bookNameElement = document.createElement("p");
        bookNameElement.textContent = "Book Name: " + item.book_name;

        var priceElement = document.createElement("p");
        priceElement.textContent = "Price: $" + item.price.toFixed(2);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function () {
            deleteCartItem(item.cart_id);
        };

        // Append elements to the cart item div
        cartItemDiv.appendChild(isbnElement);
        cartItemDiv.appendChild(authorElement);
        cartItemDiv.appendChild(bookNameElement);
        cartItemDiv.appendChild(priceElement);
        cartItemDiv.appendChild(deleteButton);

        // Append the cart item div to the cart container
        cartContainer.appendChild(cartItemDiv);
    })
})