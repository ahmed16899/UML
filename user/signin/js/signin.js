$("#signin").click(function () {
    const newUser = new User($("#username").val(), $("#password").val())
    newUser.signIn();
})