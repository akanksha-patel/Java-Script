// JavaScript Document

window.onload = initAll;

var tx,count;
var maxCount = 10;
function initAll(){
	tx = document.getElementById('tx');
	count = document.getElementById('count');
	count.innerHTML = maxCount;
	
	tx.onkeypress = setCount;
}

function setCount(){
	var countleft = maxCount-this.value.length;
	if(countleft<=0){
		alert('maximum limit crossed');
		tx.innerHTML = tx.innerHTML.substring(0,maxCount);		
	}

	count.innerHTML = countleft;
	
}