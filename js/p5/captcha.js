function captcha(){
    let str = '@#$&*0123456789abcdefghijklmnopgrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let strlenght = str.length;
    let store = ''
    for (let i=0;i<6;i++){
        let randomstore = Math.random();
        let aftermultiply = strlenght*randomstore;
        let afterfloor = Math.floor(aftermultiply);
        let finaloutput = str.charAt(afterfloor);
        store = store+finaloutput
    }
    document.getElementById('show').innerHTML=store
}

// let str = '@#$&*0123456789abcdefghijklmnopgrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let strlenght = str.length;
// console.log(str)

// let ran = Math.random();
// let strmultiply = str*ran;

// let removedecimal = Math.floor(strmultiply);
// console.log(removedecimal);



