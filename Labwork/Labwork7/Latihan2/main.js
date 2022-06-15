var marked = document.querySelectorAll('mark');
var myButton = document.querySelector('button');

function highlight() {
	var mark1 = marked[0];
	if (mark1.style.fontWeight){
		for (var mark of marked) {
			mark.style.removeProperty('color');
			mark.style.removeProperty('font-weight');
			mark.style.setProperty('background-color', 'white');
		}
		myButton.style.setProperty('background-color', 'red');
	}
	else{
		for (var mark of marked) {
		mark.style.setProperty('color', 'red');
		mark.style.setProperty('background-color', 'yellow');
		mark.style.setProperty('font-weight', '900')
		}
		myButton.style.setProperty('background-color', 'lime');
	}
}

myButton.onclick = function(){
	highlight();
}