class Librarian {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    signIn() {
        const librarian = JSON.parse(localStorage.getItem('librarian'))
        if (librarian.username == this.username) {
            if (librarian.password == this.password) {
                console.log('done')
                $("#allError").addClass('d-none')
                window.location = '/librarian/home/home.html'
            }
            else {
                $("#allError").removeClass('d-none')
            }
        }
        else {
            $("#allError").removeClass('d-none')
        }
    }

    addBook(book) {
        let books = []
        if (localStorage.getItem('books')) {
            books = JSON.parse(localStorage.getItem('books'))
        }
        books.push(book);
        $("#added").removeClass('d-none')
        localStorage.setItem('books', JSON.stringify(books))
        console.log(book)
    }
    search(txt) {
        let books = []
        if (localStorage.getItem('books')) {
            books = JSON.parse(localStorage.getItem('books'))
        }
        const newBooks = [];
        for(let i = 0 ; i<books.length ; i++)
        {
            if(books[i].name.includes(txt))
            {
                newBooks.push(books[i])
            }
        }
        for (let i = 0; i < newBooks.length; i++) {
            let tmp = `<div class="col-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${newBooks[i].author}</h5>
                  <p class="card-text">${newBooks[i].name}</p>
                  <div class="text-center">
                    <button  class="btn btn-primary">Update</button>
                    <button  class="btn btn-danger my-2 delete" onclick="deleteBook(${i})">Delete</button>
                  </div>
                </div>
              </div>
            </div>`;
            $("#allDataBooks").append(tmp);
          }
    }

    deleteBook(bookName)
    {
        let books = []
        if (localStorage.getItem('books')) {
            books = JSON.parse(localStorage.getItem('books'))
        }
        console.log(books)
        console.log(bookName)

        for(let i = 0 ; i<books.length ; i++)
        {
            if(books[i].name.includes(bookName) )
            {
                books.splice(i,1)
                console.log('asdasddsasdadas')
            }
           
        }
        for (let i = 0; i < books.length; i++) {
            let tmp = `<div class="col-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${books[i].author}</h5>
                  <p class="card-text">${books[i].name}</p>
                  <div class="text-center">
                    <button  class="btn btn-primary">Update</button>
                    <button  class="btn btn-danger my-2 delete" onclick="deleteBook(${i})">Delete</button>
                  </div>
                </div>
              </div>
            </div>`;
            $("#allDataBooks").append(tmp);
          }
        localStorage.setItem('books' , JSON.stringify(books) )
    }
}