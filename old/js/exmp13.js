// JavaScript Document

window.onload = initAll;

var arrServ = new Array('Joomla','Drouple','Spring','Struts','JSF');

var liArr;
function initAll(){
	liArr = document.getElementsByTagName('li');
	for(i=0;i<liArr.length;i++){
		liArr[i].onmouseover = onOver;
		liArr[i].onmouseout = onOut;	
	}		
}

function onOver(){
	/*
	for(i=0;i<liArr.length;i++){
		liArr.className = '';
	}*/
	
	this.className = 'onov';
	//setSubMenu();
}

function setSubMenu(){
	
}

function onOut(){
	for(i=0;i<liArr.length;i++){
		liArr.className = '';
	}
	
	this.className = 'onout';
}