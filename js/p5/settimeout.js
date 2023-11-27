function run(){
    setTimeout(show,4000)
    function show (){
        document.getElementById('img').style.display="none";
        document.getElementById('main').style.display="block";
    }
}
setInterval(bhaj, 100)
let value_st=0;
function bhaj(){
    if(100>value_st){
        let store = document.querySelector('#running')
        value_st++
        store.innerHTML = value_st;
    }
    else{
        clearInterval();
    }
}