function cal(){
    let how = document.getElementById('how').value;
    let product = document.getElementById('productpr').value;
    let totalp =how*product;
    let sgst = (totalp*(12/100));
    let cgst = (totalp*(6/2100));
    console.log(how,product);
    document.getElementById('sgst').innerHTML = sgst;
    document.getElementById('cgst').innerHTML = cgst;
    document.getElementById('tgst').innerHTML = sgst+cgst;
    return false;
}