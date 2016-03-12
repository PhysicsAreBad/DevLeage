var area;

var color = 'red';

var redNum = 0;
var orangeNum = 0;
var yellowNum = 0;
var greenNum = 0;
var blueNum = 0;
var violetNum = 0;
var totalNum = 0;

function createpic () {
	document.getElementById(color).innerHTML = "";
	area = Math.round(Math.random()*5);
	if (area === 0) {
		color = 'red';
		totalNum++;
		redNum++;
	};
	if (area === 1) {
		color = 'orange';
		totalNum++;
		orangeNum++;
	};
	if (area === 2) {
		color = 'yellow';
		totalNum++;
		yellowNum++;
	};
	if (area === 3) {
		color = 'green';
		totalNum++;
		greenNum++;
	};
	if (area === 4) {
		color = 'blue';
		totalNum++;
		blueNum++;
	};
	if (area === 5) {
		color = 'violet';
		totalNum++;
		violetNum++;
	};
	document.getElementById(color).innerHTML = "<img src='giphy.gif' height='300' width='300'>";
	document.getElementById('redNum').innerHTML = "The unicorn has touched red " + redNum + " times.";
	document.getElementById('orangeNum').innerHTML = "The unicorn has touched orange " + orangeNum + " times.";
	document.getElementById('yellowNum').innerHTML = "The unicorn has touched yellow " + yellowNum + " times.";
	document.getElementById('greenNum').innerHTML = "The unicorn has touched green " + greenNum + " times.";
	document.getElementById('blueNum').innerHTML = "The unicorn has touched blue " + blueNum + " times.";
	document.getElementById('violetNum').innerHTML = "The unicorn has touched violet " + violetNum + " times.";
	document.getElementById('totalNum').innerHTML = "The unicorn moved " + totalNum + " times.";
};