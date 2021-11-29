var Books = []
var Book = function(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
}

function AddBook() {
    var title = document.getElementById("b_title").value;
    var price = document.getElementById("b_price").value;
    let id = Books.length + 1;
    var book = new Book(id, title, price);
    Books.push(book);
    BindBook(Books)
    console.log(Books)
}
var btn = document.getElementById("btn");
btn.addEventListener("click", AddBook);

function BindBook(books) {
    let temp = ``
    books.forEach(b => {
        var card = document.querySelector(".none-template").innerHTML;
        var result = card.replace("$title", b.title).replace("{title}", b.title).replace("{price}", b.price)
        temp += result
        console.log(card)
    })
    document.getElementById("tbl-data").innerHTML = temp
}


function removeBook(id) {
    Books.splice(id - 1, 1);
    BindBook(Books)
}