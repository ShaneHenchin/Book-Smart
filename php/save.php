<?php
$hostname='mysql6.000webhost.com';
$username='a7283747_henchin';
$password='henchinshoodies91';
$database='a7283747_henchin';
 
 
$bookImage = $_POST['bookImage'];
$title = $_POST['title'];
$authors = $_POST['authors'];
$publisher = $_POST['publisher'];
$textSnippet = $_POST['textSnippet'];
$retailPrice = $_POST['retailPrice'];
$salePrice = $_POST['salePrice'];
 
try {
    $dbh = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
 
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // <== add this line
 
 
$sql = "INSERT INTO book_details(1) (bookImage,title,authors,publisher,textSnippet,retailPrice,salePrice) VALUES (:bookImage,:title,:authors,:publisher,:textSnippet,:retailPrice,:salePrice)";
 
$q = $dbh->prepare($sql);
 
$q->execute(array(':bookImage'=>$bookImage,
	                ':title'=>$title,
                    ':authors'=>$authors,
                    ':publisher'=>$publisher,
                    ':textSnippet'=>$textSnippet,
                    ':retailPrice'=>$retailPrice,
                    ':salePrice'=>$salePrice));
 
 
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
?>