window.onload = initAll;

var str;
var intv;

function initAll(){
	var bk = document.getElementById('bk');	
	bk.onmouseover = onFoc;
	bk.onmouseout = onOut;
	
	str = bk.innerHTML;
	
	intv = setInterval(rotate,250);	
}

function onOut(){
	intv = setInterval(rotate,50);	
}

function onFoc(){
	clearInterval(intv);
}

function rotate(){
	var ch = str.substring(0,1);
	str = str.substring(1).concat(ch);
	//alert(str);
	bk.innerHTML = str;
}




