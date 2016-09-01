window.onload = initAll;

var sp,ak1;

function initAll(){
	sp = document.getElementById('ak');
	ak1 = document.getElementById('ak1');

	sp.onmouseover = onOv;
	sp.onmouseout = onOut;
	sp.onmousemove = onMov;
}


function onOv(){
	ak1.innerHTML = 'Mouse Over';
}


function onOut(){
	ak1.innerHTML = 'Mouse Out';
}


function onMov(event){
	//ak1.innerHTML = "x: "+event.clientX+" y: "+event.clientY;
	ak1.innerHTML = "x: "+event.screenX+" y: "+event.screenY;
}