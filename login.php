<?php
$hostname='mysql6.000webhost.com';
$username='a7283747_henchin';
$password='henchinshoodies91';
$database='a7283747_henchin';
 
 
$e_mail = $_POST['e_mail'];
$password = $_POST['password'];
$phone_number = $_POST['phone_number'];
 
try {
    $dbh = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
 
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // <== add this line
 
 
$sql = "INSERT INTO users (e_mail,password,phone_number) VALUES (:e_mail,:password,:phone_number)";
 
$q = $dbh->prepare($sql);
 
$q->execute(array(':e_mail'=>$e_mail,
                    ':password'=>$password,
                    ':phone_number'=>$phone_number));
 
 
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

if($row["e_mail"]==$e_mail && $row["password"]==$password)
    echo"Welcome to BookSmart";
else
    echo"Please register or re-enter login details";
?>