window.onload = initAll;

var abc,hd;
function initAll(){
	hd = document.getElementById('hd');
	
	//Case 1 & 2:	
	//var lnk = document.getElementById('lnk');
	
	//Case 3;
	var lnk = document.getElementById('bk');
	abc	= document.getElementById('abc');

	lnk.onclick = confUrl;
}

//Case 3:

function confUrl(){
	if(abc.value){
		window.location = 'a11.html?unm='+abc.value;
		return true;
	}
	return false;
}
/*
//Case 2:

function confUrl(){
	window.location = 'a11.html?unm='+hd.value;
}*/

//Case 1:
/*
function confUrl(){
	window.location = 'a12.html';	
}*/
