<?php
 
$hostname='mysql6.000webhost.com';
$username='a7283747_henchin';
$password='henchinshoodies91';
$database='a7283747_henchin';
 
 
 
$searchQuery=$_POST['searchQuery'];
 
 
 
//$searchQuery = "hun";
 
 
try {
 
    $dbh = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
 
 
 
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // <== add this line
 
 
 
    $sql = "SELECT * FROM book_details WHERE title LIKE '%$searchQuery%'";
 
$q = $dbh->prepare($sql);
 
$q->execute();
 
$rows= $q->fetchAll(PDO::FETCH_ASSOC);
 
 
 
$testArray= array();
 
foreach ($rows as $row)
 
    {
 
$row_array['title'] =$row["title"];
 
//echo json_encode($row["title"]);
 
array_push($testArray, $row_array);
 
    }
 
echo json_encode($testArray);
 
 
 
 
    $dbh = null;
 
    }
 
catch(PDOException $e)
 
    {
 
    echo $e->getMessage();
 
    }
 
?>
