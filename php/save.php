<?php
$hostname='mysql14.000webhost.com';
$username='a9644992_shane';
$password='password1';
$database='a9644992_FYP';

$image="blaaaah";
$title="The Hunger Games";
$authors="Eanna Mulrooney";
$publisher="Shane Henchin";
$publishedDate= new DateTime('2012-01-01');
$textSnippet="Eanna Mulrooney is a....";

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
 
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // <== add this line
 

$sql = "INSERT INTO book_details (image,title,authors,publisher,publishedDate,textSnippet) VALUES (:image,:title,:authors,:publisher,:publishedDate,:textSnippet)";

$q = $dbh->prepare($sql);

$q->execute(array(':image'=>$image,
                    ':title'=>$title,
                    ':authors'=>$authors,
                    ':publisher'=>$publisher,
                    ':publishedDate'=>$publishedDate,
                    ':textSnippet'=>$textSnippet));

    
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
?>
 