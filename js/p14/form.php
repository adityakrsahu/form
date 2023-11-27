<?php
$name = $_POST['name'];
$email = $_POST['email'];
$num = $_POST['num'];
$pass = $_POST['pass'];
$cpass = $_POST['cpass'];
$code = $_POST['code'];
$add = $_POST['add'];



//database cannetion

$conn = new mysqli('localhost','root','','test');
if($conn->connect_error){
    die('connection failed : '.$conn->connect_error);

}
else{
    $stmt = $conn->prepare("insert into from(name,email,num,pass,cpass,code,add)values(?,?,?,?,?,?,?)");
    $stmt->bind_param("ssissis",$name,$email,$num,$pass,$cpass,$code,$add);
    $stmt->execute();
    echo"form succesfully....";
    $stmt->close();
    $conn->close();
}




?>
