var Uscore = 0;
var audio = new Audio('yay.mp3')
var multiplier = 1; 
var press = function (){
	Uscore = Uscore + multiplier * 1;
	if (Uscore > 100) {
		multiplier++;
		Uscore = 0;
		document.getElementById('score').innerHTML = "Your have " + Uscore + " cakes"
document.getElementById('multi').innerHTML = "You get " + multiplier + " cakes per a click"
		audio.play();
	}
	document.getElementById('score').innerHTML = "Your have " + Uscore + " cakes"
document.getElementById('multi').innerHTML = "You get " + multiplier + " cakes per a click"
	if (multiplier > 100) {
		document.getElementById('won').innerHTML = "You won!"
	};

};

function reset () {
	Uscore = 0;
	multiplier = 1;
	document.getElementById('score').innerHTML = "Your have " + Uscore + " cakes"
	document.getElementById('multi').innerHTML = "You get " + multiplier + " cakes per a click"
	document.getElementById('won').innerHTML = ""
};
//By Jack Gonser
