
function show(){
    let email = 'admin@gmil.com'
    let pass1 = '12345678'
    let uname = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    console.log(uname,pass);
    if (email === uname && pass1 === pass) {
        window.location.href="fast.html"
    }
    else {
        alert("invalid username")
        return false;
    }

}


function gtp(){
    let length1 = '0123456789';
    let storelength = length1.length
    let storeoutput = '';
    console.log('storelength')
    for(let i=0; i<6;i++){
        let storeotp = Math.random();
        storeoutput = storeoutput + Math.floor(storeotp*storelength)
    }
    document.getElementById('otp').innerHTML = storeoutput;
}