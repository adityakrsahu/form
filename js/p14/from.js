let store =''

function show(){
    let naam = document.getElementById('naam').value;
    let ema = document.getElementById('email').value;
    let number =parseInt(document.getElementById('num').value);
    let  maxmob =document.getElementById('num').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    let  add = document.getElementById('add').value;
    let  pin = parseInt(document.getElementById('code').value);
    let moxpin = document.getElementById('code').value;
    let pha = document.getElementById('chp').value;
    let box = document.getElementById('box')

    if(naam === ''){
        document.getElementById('errorname').innerHTML="please enter your name";
        document.getElementById('naam').focus()
        return false
    }
    else if(ema === ''){
        document.getElementById('errorname').innerHTML='';
        document.getElementById('erroremail').innerHTML="please enter your email"; 
        document.getElementById('email').focus()
        return false
    }
    else if (! ema.includes('@gmail.com')){
        document.getElementById('erroremail').innerHTML="@gmail.com must be include";
        return false;
    }
    else if(isNaN(number)){
        document.getElementById('erroremail').innerHTML='';
        document.getElementById('errornum').innerHTML="please enter your number";
        document.getElementById('num').focus;
        return false;
    }
    else if (maxmob.length !==10){
        document.getElementById('errornum').innerHTML="please enter valid mobile";
        return false;
    }
    else if(pass === ''){
        document.getElementById('errornum').innerHTML='';
        document.getElementById('errorpass').innerHTML="please enter your passwrd";
        document.getElementById('pass').focus()
        return false
    }
    else if (! pass.includes('@')){
        document.getElementById('errorpass').innerHTML="@ must be include";
        return false;
    }
    else if(cpass === ''){
        document.getElementById('errorpass').innerHTML='';
        document.getElementById('errorcpass').innerHTML="please enter your conf password";
        document.getElementById('cpass').focus()
        return false
    }
    else if ( pass !== cpass){
        document.getElementById('errorcpass').innerHTML="password not matched";
        document.getElementById('pass').value ='';
        document.getElementById('cpass').value='';
        return false;
    }
    else if(add === ''){
        document.getElementById('erroradd').innerHTML="please enter your name";
        document.getElementById('add').focus()
        return false
    }
    else if(isNaN(pin)){
        document.getElementById('erroradd').innerHTML='';
        document.getElementById('errorpin').innerHTML="please enter your pin code";
        document.getElementById('code').focus()
        return false;
    }
    else if(moxpin.length !==6){
        document.getElementById('errorpin').innerHTML="please enter valid pin code";
        return false;
    }
    else if(pha === ''){
        document.getElementById('errorpin').innerHTML='';
        document.getElementById('errorcode').innerHTML='pleas enter your code';
        document.getElementById('chp').focus()
        return false;
    }
    else if(pha !== store){
        document.getElementById('errorcode').innerHTML='please enter valid code';
        return false;
    }

    else if(!box.checked){
        document.getElementById('errorcode').innerHTML='';
        document.getElementById('errorbox').innerHTML='please enter yore checkbox';
        return false;
    }

    else{
        window.open('login.html')
    }
    
}

function rot(){
    let str = '@#$&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let strlenght = str.length;
    for(let i=0;i<6;i++){
        let randomstore = Math.random();
        let aftermultiply = strlenght*randomstore;
        let afterfloor = Math.floor(aftermultiply);
        let finaloutput = str.charAt(afterfloor);
        store = store+finaloutput
    }
    document.getElementById('show').innerHTML=store
    
}

