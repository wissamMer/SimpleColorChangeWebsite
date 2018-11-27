var num = 0;

function func1(){
if (num >= 0 && num < 3) {
	num = num + 1;
} else {
	num = 0;
}
topName();
backimg();
console.log(num);
}

function func2(){
if (num > 0 && num <= 3) {
	num = num - 1;
} else {
	num = 3;
}
topName();
backimg();
console.log(num);
}

function topName(){
var name = [];
name[0] = 'red';
name[1] = 'blue';
name[2] = 'green';
name[3] = 'yellow';
var text = document.getElementById('top');
text.innerHTML = name[num];
backimg();
}

function backimg(){
if(num == 0){
	document.getElementById('bod').style.backgroundImage = "url(images/red.jpg)";
}

if(num == 1){
	document.getElementById('bod').style.backgroundImage = "url(images/blue.png)";
}

if(num == 2){
	document.getElementById('bod').style.backgroundImage = "url(images/green.jpg)";
}

if(num == 3){
	document.getElementById('bod').style.backgroundImage = "url(images/yellow.jpg)";
}

}

function animate (){
anime({
		targets: 'div.box',
		translateY: [
		{ value: 600, duration: 500 },
		{ value: 275, duration: 800 }
		],
		rotate:{
	value: '1turn',
	easing: 'easeInOutSine'
	},
	delay: function(i){ return i * 1000},
		autoplay:false,
		loop:true
	});
}