window.onload = initAll;

function initAll(){
	//Case 1:	
	//var t = document.getElementById('bk');
	//alert(t);
	//alert(t.id);
	//alert(t.className);	
	
	//Case 2:	
	//var elms = document.getElementsByTagName('span');
	//alert(elms);
	//alert(elms.length);
	//alert('mohan is a '.length);
	/*
	for(var i=0;i<elms.length;i++){
		alert(elms[i].id);	
	}*/

	//Case 3:
	
	var elms = document.getElementsByName('a');
	for(var i=0;i<elms.length;i++){
		alert(elms[i].id);	
	}
	

}