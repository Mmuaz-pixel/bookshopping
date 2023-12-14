document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('user_id');

    if (!token) {
        // Redirect to the login page if no token is found
        window.location.href = 'login.html';
    }

    const addItem = async (book_name, author, isbn, price) => {
        try{
            await fetch('http://localhost:5000/cart/add', {
                method: 'POST', body: JSON.stringify({
                    userId: token, book_name: book_name, ISBN: isbn, author: author, price: price
                    
                })
            })

            alert("item added to cart")
        }
        catch(error)
        {
            alert("Error adding to cart")
        }

    }

    const bookDiv = document.getElementsByClassName('bookDiv');
    for (let i = 0; i < bookDiv.length; i++) {
        const element = bookDiv[i];
        element.children[5].addEventListener('click', addItem(element.children[1].textContent, element.children[2].textContent.substring(8), element.children[2].textContent.substring(5), element.children[3].textContent.substring(8)))
    }
})