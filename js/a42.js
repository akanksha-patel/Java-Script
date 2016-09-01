window.onload = initAll;

var tbl,tbd;
function initAll(){
	var psc = document.getElementById('psc');
	var pdsc = document.getElementById('pdsc');
	psc.indx = 0;
	pdsc.indx = 0;
	psc.ord = true;
	pdsc.ord = false;

	var rsc = document.getElementById('rsc');
	var rdsc = document.getElementById('rdsc');
	rsc.indx = 1;
	rdsc.indx = 1;
	rsc.ord = true;
	rdsc.ord = false;

	psc.onclick = sortFunc;
	pdsc.onclick = sortFunc;
	rsc.onclick = sortFunc;
	rdsc.onclick = sortFunc;
	
	tbl = document.getElementsByTagName('table')[0];
	tbd = tbl.getElementsByTagName('tbody')[0];	
}

var col;
var ord;
function sortFunc(){
	col = this.indx;
	ord = this.ord;

	var arr1 = tbd.getElementsByTagName('tr');

	var arr2 = new Array(arr1.length);

	for(var i=0;i<arr1.length;i++){
		arr2[i] = arr1[i].cloneNode(true);
	}	

	arr2.sort(sortRecord);
	
	tbl.removeChild(tbd);

	tbd = document.createElement('tbody');
	
	for(var i=0;i<arr2.length;i++){
		tbd.appendChild(arr2[i]);
	}

	tbl.appendChild(tbd);
}

function sortRecord(a,b){
	var col1 = a.getElementsByTagName('td')[col];
	var col2 = b.getElementsByTagName('td')[col];	

	var tx1 = col1.firstChild.data;
	var tx2 = col2.firstChild.data;

	if(tx1<tx2){
		var x = ord?-1:1;
		//alert(tx1+' < '+tx2+' - '+x+' - '+ord);
		return x;
	}else if(tx1>tx2){
		var x = ord?1:-1;
		//alert(tx1+' > '+tx2+' - '+x+' - '+ord);
		return ord?1:-1;
	}else{
		//alert(tx1+' same '+tx2+' - '+ord);
		return 0;
	}
}




