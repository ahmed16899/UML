class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  signUp() {
    let users = []
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'))
    }
    if (users.length == 0) {

      users.push(this);
      localStorage.setItem('users', JSON.stringify(users))
      window.location = '/user/signin/signin.html'
    }
    else {
      let checkDuplicated = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username == this.username) {
          checkDuplicated = true;
          console.log('eeeee')

        }
        else {
          checkDuplicated = false;
          console.log('eeeee')

        }
      }
      if (!checkDuplicated) {
        //const newUser = new User($("#username").val(), $("#password").val())
        users.push(this);
        console.log('eeeee')
        localStorage.setItem('users', JSON.stringify(users))
        window.location = '/user/signin/signin.html'
      }
      else {
        console.log('duplicated')
        $("#allError").removeClass('d-none')
      }
    }
  }


signIn()
{
  let users = []
if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
}

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == this.username){
        if (users[i].password ==this.password) {
            console.log('done')
             $("#allError").addClass('d-none')
            window.location = '/user/home/home.html'
        }
        else {
            $("#allError").removeClass('d-none')
        }
    }
    else {
          $("#allError").removeClass('d-none')
    }
}
}
}