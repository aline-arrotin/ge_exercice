# ToDo

L'idée est d'ajouter et d'afficher des "post-Its" de tâches. Ces tâches auront un titre, une date, un texte descriptif et en version 2, une catégorie.

A vous de faire la base de données.....

Sont fournis :
- config.php : il contient 4 variables correspondant à :
    + l'adresse du serveur mySql
    + l'utilisateur mySql
    + le nom de la database
    + le mot de passe de l'utilisateur
    Ce fichier se termine par une ligne de code qui crée la connexion à mySql. Cette connexion est mémorisée dans une variable "$connect". Les transactions se feront en UTF8.

- listing.php : ce fichier contient un script générant une requête SQL de type SELECT à définir. Sur base de cette requête, une chaine JSON est générée et récupérable en Ajax.
- insert.php : ce fichier contient un exemple de chaîne json à lui fournir en Ajax et une requête qui récupère cette chaine et l'injecte dans une requête SQL de type INSERT à adapter selon la structure de votre table. Cette requête crée un enregistrement dans une table.
- 
Voilà, à vous de faire le FRONT avec HTML, CSS et Js (dont Ajax). Un formulaire permet d'ajouter des tâches. Un conseil : faire correspondre le "name" des champs du formulaire avec le noms des champs de la DB.
Le Design est libre.

Bonne chance

ps : travailler en équipe est permis.

P.
