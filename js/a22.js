window.onload = initAll;

function initAll(){
	var arr = new Array();

	arr[0] = 'mohan';
	arr[1] = 'sohan';
	arr[2] = 'rohan';
	arr[3] = 12;
	arr[5] = 'ganesh';
	for(var t=0;t<arr.length;t++){
		alert(arr[t]);
	}
	
	arr[5] = 'ganesh';	
	alert(arr[5]);
	
	arr[4] = 'xyz';
	alert(arr[4]);
}


