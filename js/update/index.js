function show(){
    let url = document.getElementById('img').value;
    let nam = document.getElementById('nam').value;
    let ret = document.getElementById('ret').value;
    let pri = document.getElementById('pri').value;

    let insert = {
        img:url,
        nam:nam,
        ret:ret,
        pri:pri
    }
    fetch('http://localhost:3000/img',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(insert)
    }).then(alert("submit"))

}