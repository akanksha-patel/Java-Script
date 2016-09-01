// JavaScript Document

window.onload = initAll;


var srvSbLnk = new Array('Web Development','Server Support','Security Solutions');
var prdctSbLnk = new Array('AS40','AS42s','AS45d2k');
var arrArr = new Array(srvSbLnk,prdctSbLnk);
var posArr = new Array('40px','130px');

var liArr = new Array();
var sub;
function initAll(){
	sub = document.getElementById('sub');
	liArr = document.getElementsByTagName('li');
	for(i=0;i<liArr.length;i++){		
		liArr[i].indx = i;
		liArr[i].onmouseover = onOver;
		liArr[i].onmouseout = onOut;	
	}		
}

function onOver(){
	for(i=0;i<liArr.length;i++){
		liArr.className = '';
	}
	
	this.className = 'onov';
	setSubMenu(this);
}

function setSubMenu(tm){	
	sub.innerHTML = '';
	sub.style.left = posArr[tm.indx];
	sub.style.display = 'block';
	for(i=0;i<arrArr[tm.indx].length;i++){
		var tmp = document.createElement('div');
		tmp.className = 'sbb';
		tmp.innerHTML = arrArr[tm.indx][i];
		tmp.onmouseover = ov;
		tmp.onmouseout = ot;
		sub.appendChild(tmp);
	}
}

function onOut(){
	for(i=0;i<liArr.length;i++){
		liArr.className = '';
	}
	
	this.className = 'onout';
}

function ov(){
	this.className = 'sbb_';
}

function ot(){
	this.className = 'sbb';
}