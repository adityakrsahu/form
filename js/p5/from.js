function show(){
    let email = 'admin@gmil.com'
    let pass1 = '12345678'
    let uname = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    console.log(uname,pass);
    if (email === uname && pass1 === pass) {
        // window.location.href='index.html'
        window.open('index.html')
    }
    else{
        document.getElementById('login').innerHTML="user not ex";
        document.getElementById('user').value;
        document.getElementById('pass').value;
        document.getElementById('user').focus();
        return false;
    }
    // else{
    //     alert("invalid username")
    //     return false;
    // }

}