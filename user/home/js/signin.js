let users=[]
if(localStorage.getItem('users'))
{
     users = JSON.parse(localStorage.getItem('users'))
}

console.log(users)

$("#signin").click(function(){
   
    
   for(let i = 0 ; i<users.length ; i++)
   {
        if(users[i].username == $("#username").val())
        {
            if(users[i].password == $("#password").val())
            {
               //alert('done')
               console.log('done')
            }
        }
        else
        {
            //alert('no user name')
        }
   }
    

})