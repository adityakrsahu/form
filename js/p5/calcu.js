 let s = '';
function cal(stor){
  s=s+stor;
  document.getElementById('show').innerHTML = s;
}
function output(){
    let storeval=eval(s)
    document.getElementById('show').innerHTML = storeval
}

function ac(){
  s=''
  document.getElementById(show).innerHTML=''
}

function deleteNumber() {
    var display = document.getElementById("display");

    display.textContent = display.textContent.s(0, -1);
  }