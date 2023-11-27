async function rot(){    
    let db = await fetch('http://localhost:3000/form');
    let output = await db.json();
    let foutput = document.getElementById('rot1');
    foutput.innerHTML = output.map(a => `
    <table border="1px" cellpadding="20px" align="center">
        <tr>
            <td >${a.id}</td>
            <td>${a.name}</td>
            <td>${a.email}</td>
            <td>${a.mobile}</td>
            <td>${a.password}</td>
            <td>${a.cpassword}</td>
            <td>${a.pin}</td>
            <td onclick="del(${a.id})" bgcolor="red">DELETE</td>
            <td onclick="upd(${a.id})" bgcolor="blue">UPDATE</td>
        </tr>
    </table>`).join(" ")       
}
function del(id){
    fetch(`http://localhost:3000/form/${id}`,{
        method:"delete"
    }).then(alert("delete"));
}


let storeid = 0

function upd(id){
    storeid = id; 
    document.getElementById('show1').style.display="block";

}
function update(){
    let naam = document.getElementById('naam1').value;
    let ema = document.getElementById('email1').value;
    let num =parseInt(document.getElementById('num1').value);
    let pass = document.getElementById('pass1').value;
    let cpass = document.getElementById('cpass1').value;
    let  add = document.getElementById('add1').value;
    let  pin = parseInt(document.getElementById('code1').value);

    let insert = {
        name:naam,
        email:ema,
        num:num,
        password:pass,
        cpassword:cpass,
        address:add,
        pin:pin
    }
    fetch(`http://localhost:3000/form/${storeid}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(insert)
    }).then(alert("update"))

}