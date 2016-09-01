window.onload = initAll;


function initAll(){
	var ak = document.getElementById('ak');

	ak.onclick = newLnk;

	document.forms[0].onsubmit = getVal;
}


function getVal(){
	//alert(location.host);
	//alert(location.href);
	//alert(location.pathname);
	//alert(location.protocol);
	
	location.reload();
	return false;
}


function newLnk(){
	window.location = 'a31.html';
}

