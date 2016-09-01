// JavaScript Document

window.onload = initAll;

var serv = new Array('shared','vps','dedicated','raid');
var srlnk = new Array('a12.html','a13.html','a14.html','a15.html');
var prod = new Array('tomcat','xamp','wamp');
var prlnk = new Array('a22.html','a23.html','a24.html');
var pos = new Array(48,132);
var arr = new Array(serv,prod);
var arr2 = new Array(srlnk,prlnk);

var lis,abc;
function initAll(){
	lis = document.getElementsByTagName('li');
	abc = document.getElementById('abc');
	abc.onmouseout = function(){this.stt = false;}
	
	for(i=0;i<lis.length;i++){		
		lis[i].ind = i;
		lis[i].arr = arr[i];
		lis[i].arr2 = arr2[i];
		lis[i].onmouseover = onOv;
		lis[i].onmouseout = onOut;
	}
}

function onOv(){	
	this.className = 'ov';
	abc.style.display = 'block';
	abc.innerHTML = '';
	abc.style.left = pos[this.ind]+'px';	
	for(i=0;i<this.arr.length;i++){
		var elm = document.createElement('div');
		elm.innerHTML = this.arr[i];
		elm.className = 'xyz';
		elm.onmouseover = elOv;
		elm.onmouseout = elOut;
		elm.loc = this.arr2[i];
		elm.onclick = function(){window.location=this.loc};
		abc.appendChild(elm);
	}
}

function elOv(){
	this.className = 'kr';
}

function elOut(){
	this.className = 'xyz';
}


/*function ot(){
	abc.style.display = 'none';	
}*/

function onOut(){
	this.onmouseout='';
	this.className = 'lix';	
	abc.style.display = 'none';
}