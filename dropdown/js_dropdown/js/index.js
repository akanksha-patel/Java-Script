window.onload = initAll;

var home_elm, service_elm; 
var home_sub_elm, service_sub_elm;

function initAll(){

	getAllElements();

	setAction();
	

}

function getAllElements(){
	home_elm = document.getElementById('home_elm');
	home_sub_elm = document.getElementById('home_sub_elm');
	
	service_elm = document.getElementById('service_elm');
	service_sub_elm = document.getElementById('service_sub_elm');
}

var arr = new Array();
function setAction(){
	home_elm.onmouseover = onMenuOv;
	home_elm.onmouseout = onMenuOut;

	home_sub_elm.onmouseout = onMenuOut;
	home_elm.indx = home_sub_elm.indx = 0;
	arr[0] = home_sub_elm;

	service_elm.onmouseover = onMenuOv;
	service_elm.onmouseout = onMenuOut;

	service_sub_elm.onmouseout = onMenuOut;
	service_elm.indx = service_sub_elm.indx = 1;
	arr[1] = service_sub_elm;
}

function onMenuOv(){	
	arr[this.indx].style.display = 'block';
}

function onMenuOut(){
	arr[this.indx].style.display = 'none';
}