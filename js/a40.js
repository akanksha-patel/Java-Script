

function goTo(){
	var rw = document.getElementById('rw');
	
	history.go(rw.value);
}

function goForwd(){
	window.history.forward();
}

function goBack(){
	window.history.back();
}

