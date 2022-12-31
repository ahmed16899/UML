let books = []
if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'))
}


for (let i = 0; i < books.length; i++) {
    let tmp = `<div class="col-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-text">${books[i].name}</h5>
          <p class="card-title">${books[i].author}</p>
          <p class="card-title">${books[i].category}</p>
  
          <div class="text-center">
            <button  class="btn btn-primary request" >Request</button>
          </div>
        </div>
      </div>
    </div>`;

    $("#allDataBooks").append(tmp);
}
const user = new User(localStorage.getItem('username'), localStorage.getItem('password'))
$("#search").change(function () {
    $('#allDataBooks').empty();
    user.search($("#search").val())
    console.log($("#search").val())
})


$(document).on("click", ".request", function () {
    console.log('in request')
    let bookName = $(this).parent().prev().prev().prev().html()
    //$('#allDataBooks').empty();
    console.log(bookName)
    user.request(user.username, bookName)
    alert('added succes')
    //  libr.deleteBook(bookName)
    // location.reload();
});
