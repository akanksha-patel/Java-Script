window.onload = initAll;

function initAll(){
	var p1 = new person('mo','k',3);
	var p2 = new person('di','k',5);
	var p3 = new person('ka','k',7);
	
	var arr = new Array(p1,p2,p3);

	populateRecords(arr);	
}

var ar = new Array('fNm');
function populateRecords(arr){
	var ab = document.getElementById('ab');
	
	//Case 1:
	/*
	alert('-------------------');
	for(var t=0;t<arr.length;t++){
		var tr = document.createElement('tr');
		
		var td1 = document.createElement('td');
		td1.innerHTML = arr[t].fNm;
		tr.appendChild(td1);

		var td2 = document.createElement('td');
		td2.innerHTML = arr[t].lNm;
		tr.appendChild(td2);

		var td3 = document.createElement('td');
		td3.innerHTML = arr[t].age;
		tr.appendChild(td3);

		ab.appendChild(tr);
	}	*/

	//Case 2:
	
	for(var t=0;t<arr.length;t++){
		var tr = document.createElement('tr');
		
		for(tmp in arr[t]){
			var td1 = document.createElement('td');
			td1.innerHTML = arr[t][tmp];
			tr.appendChild(td1);	
		}		

		ab.appendChild(tr);
	}
	
}

function person(fNm,lNm,age){
	this.fNm = fNm;
	this.lNm = lNm;
	this.age = age;
}
