<?php require_once("config.php") ?>
<?php 

/* exemple de chaîne json à recevoir par POST['json']
{"title":"test","id_cat":"1","content":"l\'autre titre","date":null}
*/

$myJson = json_decode($_POST['myJson']); // je recupere myjson et j utilise myjson

//print_r($myJson);


	$sql = sprintf("INSERT INTO post_it SET titre = '%s', texte = '%s', date = '%s', id_categorie = %s",
		addslashes($myJson->titre),
		addslashes($myJson->texte),
		addslashes($myJson->date),
		addslashes($myJson->id_categorie)
		);
	//exit;

	echo $sql; // affiche la requete pour controle
	
	$myListing = $connect->query($sql);
	echo $connect->error;
