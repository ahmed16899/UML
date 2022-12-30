let books = []
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'))
}
console.log(books)


for (let i = 0; i < books.length; i++) {
  let tmp = `<div class="col-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${books[i].author}</h5>
        <p class="card-text">${books[i].name}</p>
        <div class="text-center">
          <button  class="btn btn-primary">Update</button>
          <button  class="btn btn-danger my-2">Delete</button>
        </div>
      </div>
    </div>
  </div>`;
  $("#allDataBooks").append(tmp);
}

$("#search").change(function () {

  $('#allDataBooks').empty();
  const lib = JSON.parse(localStorage.getItem('librarian'))
  const libr = new Librarian(lib.username, lib.password)
  libr.search($("#search").val())
})