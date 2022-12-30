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
        console.log(txt)

        console.log(newBooks)
        //return newBooks
        for (let i = 0; i < newBooks.length; i++) {
          let tmp = `<div class="col-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-text">${newBooks[i].name}</h5>
              <p class="card-title">${newBooks[i].author}</p>
              <div class="text-center">
                <button  class="btn btn-primary getInfo" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                <button  class="btn btn-danger my-2 delete">Delete</button>
              </div>
            </div>
          </div>
        </div>`;
            $("#allDataBooks").append(tmp);
          }
    }

    deleteBook(bookName)
    {
      console.log('in delete')
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
        /*for (let i = 0; i < books.length; i++) {
            let tmp = `<div class="col-3">
              <div class="card">
                <div class="card-body">
                <h5 class="card-text">${books[i].name}</h5>
                <p class="card-title">${books[i].author}</p>
                  <div class="text-center">
                    <button  class="btn btn-primary getInfo"  data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                    <button  class="btn btn-danger my-2 delete">Delete</button>
                  </div>
                </div>
              </div>
            </div>`;
            $("#allDataBooks").append(tmp);
          }*/
        localStorage.setItem('books' , JSON.stringify(books) )
    }


    updateBook(book , oldBook)
    {
        let books = []
        if (localStorage.getItem('books')) {
            books = JSON.parse(localStorage.getItem('books'))
        }
        console.log(books)
        console.log(oldBook)

        for(let i = 0 ; i<books.length ; i++)
        {
            if(books[i].name == oldBook )
            {
                books.splice(i,1,book)
                console.log('asdasddsasdadas')
            }
           
        }
        /*for (let i = 0; i < books.length; i++) {
            let tmp = `<div class="col-3">
              <div class="card">
                <div class="card-body">
                <h5 class="card-text">${books[i].name}</h5>
                <p class="card-title">${books[i].author}</p>
                  <div class="text-center">
                    <button  class="btn btn-primary getInfo"  data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                    <button  class="btn btn-danger my-2 delete">Delete</button>
                  </div>
                </div>
              </div>
            </div>`;
            $("#allDataBooks").append(tmp);
          }*/
        localStorage.setItem('books' , JSON.stringify(books) )
    }
}