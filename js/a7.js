window.onload = initAll;

function initAll(){
	//Case 1:
	/*
	var t = document.images;
	for(var i=0;i<t.length;i++){
		alert(t[i].src);
	}*/

	//Case 2:
	/*
	var t = document.links;	
	for(var i=0;i<t.length;i++){
		alert(t[i]);
	}*/

	//Case 3:
	
	var t = document.anchors;
	for(var i=0;i<t.length;i++){
		alert(t[i].name);
	}
}