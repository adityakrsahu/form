function show(){
    let nam = document.getElementById('name').value;
    let ema = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;

    if(nam === ''){
        alert("please emter name")
        document.getElementById('name').focus()
        return false
    }
    else if(ema === ''){
        alert("please emter email")
        document.getElementById('email').focus()
        return false
    }
    else if(pass === ''){
        alert("please emter pass")
        document.getElementById('pass').focus()
        return false
    }
    else if(cpass === ''){
        alert("please emter cpass")
        document.getElementById('cpass').focus()
        return false
    }
    else if(pass !== cpass){
        alert("enter the not mach password")
        return false
    }
    
}