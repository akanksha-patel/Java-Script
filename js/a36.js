window.onload = initAll;


function initAll(){
	var p = document.getElementById('prn');
	//p.onclick = function(){  window.open('a2.html'); };

	p.onclick = nwWin;
}	


function nwWin(){
	//window.open("a2.html","_blank","toolbar=yes, location=no, directories=yes, status=yes, menubar=no, scrollbars=no, resizable=true, copyhistory=yes, width=200, height=200");
	//window.open('a3.html','My Window','width=200,height=200');
}


