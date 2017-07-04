var prixADevine;
var prixPropose;

prixADevine = Number(prompt("Entrez un prix"));
prixPropose = Number(prompt("Devinez le prix"));

while(prixPropose !== prixADevine){
	if(prixPropose > prixADevine){
		console.log("C'est moins");
	}
	else{
		console.log("c'est plus");
	}
	prixPropose=Number(prompt("Essayer un nouveau prix"));
}
console.log("Bravo vous avez trouvé");
