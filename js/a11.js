window.onload = initAll;

var ip,sp,sp1;

function initAll(x){
	//alert(x.type);
	ip = document.getElementById('bk');
	sp = document.getElementById('ak');
	sp1 = document.getElementById('ak1');
	
	//ip.onkeyup = keyUp;	
	//ip.onkeydown = keyDown;
	ip.onkeypress = keyPress;
}


function keyPress(x){
	//sp.innerHTML = ip.value.length;
	sp.innerHTML = x.type;
}

/*
function keyDown(event){
	//sp.innerHTML = 'So far u\'v typed in: '+ip.value.length;
	
	//sp1.innerHTML = event.keyCode;
	//sp1.innerHTML = event.shiftKey;
	//sp1.innerHTML = event.shiftKey==1?'shift key pressed':'Shift key not pressed';	
	//sp1.innerHTML = event.type;
}*/

/*
var i = 0;
function keyUp(event){
	//Case 0:
	//alert('onkeyup: '+event);
	
	//Case 1:
	//alert('you typed: '+ip.value);

	//Case 2:
	//sp.innerHTML = 'User is typing '+(++i);

	//Case 3:
	//alert(event.type);

	//Case 4:
	//sp1.innerHTML = this.value;

	//Case 5:
	sp1.innerHTML = 'So far u\'v typed in: '+ip.value.length;
}*/