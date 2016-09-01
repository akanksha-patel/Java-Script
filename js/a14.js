window.onload = initAll;

var x;
function initAll(){
	x = document.getElementById('ak1');
	var btn = document.getElementById('btn');
	//btn.onclick = someFunc;

	//window.onabort = onAbo;//----x
	//window.onblur = onBlr;
	//window.onfocus = onFoc;//--- :)
	//window.onmove = onMov;//---x
	//window.onresize = onRs;
	//window.onscroll = onScr;
	//window.onunload = onUnl;//---IE- :) OK ---- Moz- :( notOK
		
	window.onerror = onErr;
	alert(abc.name);
}

function someFunc(event){
	//var t = document.getElementById('ab');
	//alert(t.value);
	alert(event);
}

function onUnl(){
	alert('Unloading');
}

var count = 0;
function onScr(event){
	//alert(event.type);
	//count++;
	//ak1.innerHTML = 'Scrolling '+count;
}

function onRs(){
	//document.write('Window resizing');
	
	//x.innerHTML = "inner width: "+window.innerWidth+" & inner height: "+window.innerHeight;
	x.innerHTML = "outer width: "+window.outerWidth+" & outer height: "+window.outerHeight;
}

function onMov(){
	alert('Window moving');
}

function onFoc(){
	x.innerHTML = 'Welcome';
}

function onErr(){
	alert('Some Problem');
}

function onBlr(){
	x.innerHTML = 'You are switching to other page';
}

function onAbo(){
	confirm('You are about to leave the page');
}