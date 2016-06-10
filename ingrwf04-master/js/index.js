	    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };


    //Plugin jQuery. A declarer avant



$(document).ready(function(){

//J'appel les infos de la base de donnée.

function Listing() { // Je crée une fonction listing qui va effectuer les choses ci dessous.

	$.ajax({
		url:"listing.php", //J'appel mon fichier php listing
		type:"post",  // post  
		//data: donnees,
		processData:true,
		dataType:"json", // text, json, html, script,
		async:true,
		timeout: 30000,
		global:true,
		ifModified:false,
	
		

		success: function(reponse){ //Je crée uen fonction qui introduis les éléments de ma base de données dans mon site. 
			//alert('ok');

			console.log(reponse);
			texte = "";

				$(reponse).each(function(index, value){ //Je vais dans mon index et j'ajoute les values. 
					//alert(value.titre);

			texte += "<section><h2>" + value.titre + "</h2><h3>" + value.label + "</h3><p>" + value.texte + "</p></section>";
			}); //J'indique sous quelle forme je veux qu'il les entre.

			$(".listing").html(texte); //J'ajoute à la div de class="listing".
		}

	});

} //end Listing() Les données de la base de données sont importées dans la div où j'ai demandé de les intégrer.


	//Je fais un sérialize

        $('#newpost').on('submit', function(e) {
          e.preventDefault(); // Je bloque le comportement par defaut de l'évenement qui a été declenché, ici le submit.

          var formData = $(this).serializeObject(); // Je parcours le form et je recup les datas et je genre une chaine json.
          console.log(formData); 


        $.ajax({
		url:"insert.php", //J'envois sur insert.php
		type:"post",  // post  
		data: {"myJson" : JSON.stringify(formData)}, // Je lui passe une variable qui contient ma chaine JSON en string.
	
		

			success: function(reponse){
				//alert('ok');

				console.log(reponse);
				Listing(); //Je rappelle mon Listing ce qui a été submit à ma base de donnée.

			}	
        });
  });


	Listing(); // Ici je déclenche mon Listing (qui a été mis à jour).
			  //Et donc, sans faire de refresh de page, je retrouve ce qui a été ajouté dans la div demandée.
	
});





// En résume: Le serveur envoit des objets PHP de ma base de données. Ceci est traduit en chaine de caractère JSON.
//Lorsque je fais un submit, j'envois une chaine de caractère JSON que je dois traduire en objet JSON pour que PHP puisse le lire.
//Le serveur ne comprend pas les chaines de caractères