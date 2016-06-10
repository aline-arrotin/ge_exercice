<?php require_once("config.php") ?>
<?php 
//mon lama
	$sql = "SELECT * FROM post_it LEFT JOIN categorie ON id_categorie = id_categories ORDER BY date ASC";
	$myListing = $connect->query($sql);
	echo $connect->error;
	$totalRows =  $myListing->num_rows;

	$allRows = array();
		while($row = $myListing->fetch_object()) :
			$allRows[] = $row;
		endwhile;
	header('Content-Type: application/json; charset=utf-8');
	echo $JsonList = json_encode($allRows);
 ?>


 