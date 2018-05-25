/* let habitation = {
	adresse: 'Chemin des développeurs',
	bal: {
		courriers: [],
		deposerCourrier: function(courrier) {
			this.courriers.push(courrier);
		},
		retirerCourrier: function() {
			console.log(this.courriers);
			this.courriers = [];
		},
	},
};

habitation.bal.deposerCourrier('toto');
habitation.bal.retirerCourrier(); */

function Habitation(adresse) {
	this.adresse = adresse;
	this.bal = {
		courriers: [],
		deposerCourrier: function(courrier) {
			this.courriers.push(courrier);
		},
		retirerCourrier: function() {
			this.courriers = [];
		},
	};
}
maison1 = new Habitation('Chemin des développeurs');
maison2 = new Habitation('Route de St go');

function courrier(destinataire, messages) {
	this.destinataire = destinataire;
	this.messages = messages;
}
lettre1 = new courrier(
	'Chemin des développeurs',
	'Hey, les vacances se passent très bien ici, et pour toi ?'
);
lettre2 = new courrier('Route de St go', 'Coucou');

var Array_maison = [maison1, maison2];
var Array_sacoche = [lettre1, lettre2];
for (i = 0; i < Array_maison.length; i++) {
	for (j = 0; j < Array_sacoche.length; j++) {
		if (Array_sacoche[j].destinataire === Array_maison[i].adresse) {
			Array_maison[i].bal.deposerCourrier(Array_sacoche[j]);
		}
	}
}

console.log(maison1.bal.courriers);
