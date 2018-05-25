/*Créez une classe Chrono avec :
  une méthode start()
  une méthode pause()
  une méthode stop()
  une propriété currentTime*/

function Chrono() {
	this.time = 0;

	this.start = function() {
		var that = this;
		intervalID = setInterval(function() {
			that.time++;
			console.log(that.time);
		}, 1000);
	};

	this.pause = function() {
    clearInterval(intervalID);
}

	this.stop = function() {
    clearInterval(intervalID);
    this.time = 0;
  };
}
var monChrono = new Chrono();

monChrono.start();

//monChrono.stop();

var test = setTimeout(function(){
  monChrono.stop();
  console.log("a combien en est le chrono ? " + monChrono.time);
}, 10000);


// Fait un essaie et remplace "monChrono.stop();" par "monChrono.pause()". maintenant observe la console :D
