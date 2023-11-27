async function show1(){
    let db = await fetch('http://localhost:3000/img');
    let output = await db.json();
    let foutput = document.getElementById('show1');
    foutput.innerHTML =output.map(a=>`
    <div style="display:grid; grid-template-columns: auto auto auto auto;">
    <div style="height: 300px;width: 33%;">
    <div>${a.id}</div>
    <div><img width:400px; src='${a.img}'</div>
    <div>${a.nam}</div>
    <div>${a.ret}</div>
    <div>${a.pri}</div>
    <button onclick="del(${a.id})" >delete</button>
    <button onclick="upd(${a.id})">update</button>
    </div>
    </div>
    `).join(" ")
}
function del(id){
    fetch(`http://localhost:3000/img${id}`,{
        method:"DELETE",
    }).then(alert("delete"))
}
let store =0

function upd(id){
    store=id;
    document.getElementById('show2').style.display="block";
}
function update(){
    let url = document.getElementById('img1').value;
    let nam = document.getElementById('nam1').value;
    let ret = document.getElementById('ret1').value;
    let pri = document.getElementById('pri1').value;

    let insert = {
        img:url,
        nam:nam,
        ret:ret,
        pri:pri
    }
    fetch(`http://localhost:3000/form/${store}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(insert)
    }).then(alert("update"))
}
// function upd(id){
//     fetch(`http://localhost:3000/img${id}`,{
//         method:"put"
//     })
// }