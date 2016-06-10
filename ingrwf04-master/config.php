<?php 
	
// affichage des Erreurs php
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

	define("DB_USER", "root"); // si en localhost avec Mampp
	define("DB_NAME", "ingrwf04_post-it"); // nom de database
	define("DB_HOST", "localhost");// si en localhost avec Mampp
	define("DB_PASSWORD", "root");// si en localhost avec Mampp

	$connect = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME); // connection

	if( $connect->connect_errno ) : //test
		echo "Echec de connexion à la database : " . $connect->connect_error;
		exit;
	
	else :
		$connect->set_charset("utf8");
		//echo "ok";
	endif;
 ?>