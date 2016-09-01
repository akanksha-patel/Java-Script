window.onload = initAll;

var sp,ak1;

function initAll(){
	sp = document.getElementById('ak');
	ak1 = document.getElementById('ak1');

	//sp.onclick = onClk;
	//sp.onmouseup = onUp;
	//sp.onmousedown = onDwn;
	//sp.ondblclick = onDbCl;
	//sp.oncontextmenu = onCntxMn;
}

function onCntxMn(){
	ak1.innerHTML = 'Context Menu Opened';
	return false;
}

function onDbCl(){
	ak1.innerHTML = 'Double Click';
}

function onDwn(){
	ak1.innerHTML = 'Mouse Down';
}

function onUp(){
	ak1.innerHTML = 'Mouse Up';
}

function onClk(){
	ak1.innerHTML = 'You clicked';
}
