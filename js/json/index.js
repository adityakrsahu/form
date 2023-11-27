// async function show(){
//     try{
//     let data = await fetch('http://localhost:125/login');
//     let output = await data.json();
//     document.getElementById('s').innerHTML = output.map(a=>
//         `<div>${a.name}</div>
//     <div>${a.mobile}</div>
//     <div>${a.pass}</div>`).join(" ")     
//     }
//     catch(error){
//         console.log("")
//     }
// }

async function show(){
    try{
    let data = await fetch(' http://localhost:125/login');
    let output = await data.json();
    document.getElementById('s').innerHTML = output.map(a=>`<table >
    <tr>
    <th>${a.name}</th><th>${a.mobile}</th><th>${a.pass}</th>
    </tr>
    </table>`).join(" ")    
    }
    catch(error){
        console.log("")
    }
}