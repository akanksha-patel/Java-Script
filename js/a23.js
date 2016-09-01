window.onload = initAll;

function initAll(){
	var arr = new Array('mohan','sohan','rohan',45);
	arr[4] = 'raghav';
	//Case 1:	
	/*
	for(var t=0;t<arr.length;t++){
		alert(arr[t]);
	}*/
	
	//Case 2:
	
	var arr2 = new Array('maths','science','hindi');
	var arr4 = new Array('a1','a2','a3');

	var arr3 = new Array(arr,arr2,arr4);

	for(var t=0;t<arr3.length;t++){
		//alert(t);
		for(var s=0;s<arr3[t].length;s++){
			alert(arr3[t][s]);
		}
		alert('===');
	}
}


