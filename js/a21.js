window.onload = initAll;


function initAll(){
	
	//Case 1:
	//var str = "Amit is in class 10th";
	//document.write(str);
	
	//Case 2:
	var str = 'Amit is in class 10th and is a good student';
	//document.write(str.indexOf('is'));
	//document.write(str.lastIndexOf('is'));
	//document.write(str.charAt(11));
	//document.write(str.concat(' he plays gitar'));
	//document.write(str.substr(11,5));
	//document.write(str.substring(11,20));
	
	
	var str2 = 'a1-t2a2-t2a3-t2a4-';
	var arr = str2.split('t2');
	document.write(arr.length);
	
	
	for(var t=0;t<arr.length;t++){
		alert(arr[t]);
	}
	alert(str2);
}


