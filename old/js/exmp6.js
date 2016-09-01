window.onload = initAll;


function initAll(){
	var v = document.getElementById('ab');	

	v.onmouseover = ov;
	v.onmouseout = ot;

	var t = document.getElementById('ck');
	t.onmouseover = tov;
	t.onmouseout = tot;
}

function ov(){
	this.style.backgroundColor = '#f00';
}

function ot(){
	this.style.backgroundColor = '#00f';
}

function tov(){
	this.style.backgroundColor = '#000';
	this.style.color = '#fff';
}

function tot(){
	this.style.backgroundColor = '#fff';
	this.style.color = '#000';
}