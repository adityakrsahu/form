function log(){
    let usernsme = document.getElementById('uname').value;
    let pass = document.getElementById('pass').value;
    let code = document.getElementById('code').value;


    if(usernsme === ''){
        document.getElementById('errorname').innerHTML="plase enter your username";
        document.getElementById('uname').focus()
        return false;
    }
    else if(!usernsme.includes('@gmail.com')){
        document.getElementById('errorname').innerHTML="plase includes @gmail.com";
        return false;
    }
    else if(pass === ''){
        document.getElementById('errorname').innerHTML='';
        document.getElementById('errorpass').innerHTML="plase enter your password";
        document.getElementById('pass').focus()
        return false;
    }

}
