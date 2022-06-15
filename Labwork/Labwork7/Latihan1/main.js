var buttonPlus = document.querySelector('#butPlus'),
buttonMinus = document.querySelector('#butMinus'),
buttonMultiply = document.querySelector('#butMultiply'),
buttonDivision = document.querySelector('#butDivision'),
button1 = document.querySelector('#but1'),
button2 = document.querySelector('#but2'),
button3 = document.querySelector('#but3'),
button4 = document.querySelector('#but4'),
button5 = document.querySelector('#but5'),
button6 = document.querySelector('#but6'),
button7 = document.querySelector('#but7'),
button8 = document.querySelector('#but8'),
buttonPoint = document.querySelector('#butPoint'),
button9 = document.querySelector('#but9'),
button0 = document.querySelector('#but0'),
buttonAnswer = document.querySelector('#butAnswer'),
buttonReset = document.querySelector('#butReset');

function alerta(){
	alert('Test');
}

function one(){
	answer.value += '1';
}

function two(){
	answer.value += '2';
}

function three(){
	answer.value += '3';
}

function four(){
	answer.value += '4';
}

function five(){
	answer.value += '5';
}

function six(){
	answer.value += '6';
}

function seven(){
	answer.value += '7';
}

function eight(){
	answer.value += '8';
}

function nine(){
	answer.value += '9';
}

function zero(){
	answer.value += '0';
}

function plus(){
	answer.value += '+';
}

function minus(){
	answer.value += '-';
}

function multiply(){
	answer.value += '*';
}

function division(){
	answer.value += '/';
}

function point(){
	answer.value += '.';
}

function result(){
	try{
		answer.value = eval(answer.value);
	}
	catch(err){
		answer.value = 'ERROR'
		setTimeout(reset, 1000)
	}
}

function reset(){
	answer.value = '';
}

button0.onclick = function(){
	zero();
}
button1.onclick = function(){
	one();
}
button2.onclick = function(){
	two();
}
button3.onclick = function(){
	three();
}
button4.onclick = function(){
	four();
}
button5.onclick = function(){
	five();
}
button6.onclick = function(){
	six();
}
button7.onclick = function(){
	seven();
}
button8.onclick = function(){
	eight();
}
button9.onclick = function(){
	nine();
}
buttonPlus.onclick = function(){
	plus();
}
buttonMinus.onclick = function(){
	minus();
}
buttonMultiply.onclick = function(){
	multiply();
}
buttonDivision.onclick = function(){
	division();
}
buttonPoint.onclick = function(){
	point();
}
buttonAnswer.onclick = function(){
	result();
}
buttonReset.onclick = function(){
	reset();
}
