<?php
$hostname='mysql6.000webhost.com';
$username='a7283747_henchin';
$password='henchinshoodies91';
$database='a7283747_henchin';
 
 
$bookName = $_POST['bookName'];
 
try {
    $dbh = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
 
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
 
$sql = "INSERT INTO book_details (bookName) VALUES (:bookName)";
 
$q = $dbh->prepare($sql);
 
$q->execute(array(':bookName'=>$bookName));0 
 
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
?>