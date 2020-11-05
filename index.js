let books=[];

const fetchBooks1 = () => {
    fetch('https://striveschool-api.herokuapp.com/books').then(res => res.json()).then(data => {
        console.log(data)
         books = data;
         //for (const [book, i] of books.entries()) {
         for (let i = 0; i < books.length; i++) {
            const book = books[i]
            const row = document.querySelector(".row")
            const div = document.createElement("div")
            div.classList.add('col-4')
            div.innerHTML = ` 
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src="${book.img}">
                <div class="card-body">
                    <p class="card-text">
                        ${book.title}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                View
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="addToCart(books[${i}])">
                                Add to cart
                            </button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
            `
            row.appendChild(div)

             console.log (book.title)
         }
    })
    
}

window.onload = () => {
 fetchBooks1();
}


function addToCart (book) {
    console.log(book)
}