<?php
$hostname='mysql6.000webhost.com';
$username='a7283747_henchin';
$password='henchinshoodies91';
$database='a7283747_henchin';
 
 
$title = $_POST['title'];
$authors = $_POST['authors'];
$publisher = $_POST['publisher'];
$textSnippet = $_POST['textSnippet'];
 
try {
    $dbh = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
 
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // <== add this line
 
 
$sql = "INSERT INTO book_details (title,authors,publisher,textSnippet) VALUES (:title,:authors,:publisher,:textSnippet)";
 
$q = $dbh->prepare($sql);
 
$q->execute(array(':title'=>$title,
                    ':authors'=>$authors,
                    ':publisher'=>$publisher,
                    ':textSnippet'=>$textSnippet));
 
 
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
?>
 