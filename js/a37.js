window.onload = initAll;


var rw;
function initAll(){
	rw = document.getElementById('rw');
}

var ar1 = new Array('abc1','abc2','abc3','abc4');
var ar2 = new Array('abc6','abc7','abc8','abc9');
var ar4 = new Array('abc11','abc12','abc13','abc14');

var ar3 = new Array(ar1,ar2,ar4);

var tbl,cap;
function showTbl(){
	var body = document.body;

	tbl = document.createElement('table');
	cap = tbl.createCaption();
	cap.innerHTML = 'My Table';
	tbl.className = 'tbl';

	for(var t=0;t<ar3.length;t++){
		var row = tbl.insertRow(t);
		row.onclick = getIndex;
		row.indx = t;
		for(var f=0;f<ar3[t].length;f++){
			var cl = row.insertCell(f);
			cl.className = 'cl';
			cl.indx = f;
			cl.onclick = showVal;
			cl.innerHTML = ar3[t][f];		
		}
	}
	
	body.appendChild(tbl);

	var btn1 = document.createElement('span');
	btn1.innerHTML = 'Set Border';
	btn1.onclick = function(){
								//tbl.style.border = '5px solid red';
								//tbl.cellPadding = 18;
								//tbl.cellSpacing = 7;
								//tbl.style.borderCollapse = "collapse";
								//tbl.style.borderTopWidth = 5;
								//tbl.style.borderTopColor = 'red';
								//alert(tbl.className);
								tbl.className = tbl.className + ' tbl2';
						   }
	btn1.id = 'bt';
	body.appendChild(btn1);
	//cap.innerHTML = tbl.rows.length;
	tbl.rows[0].cells[0].innerHTML = 'mohan';
}

function delRow(){
	try{
		tbl.deleteRow(rw.value);
	}catch(e){
		alert(e);
	}
}

function showVal(){
	//alert(this.innerHTML);
	//alert(this.indx);
	//alert(this.parentNode.indx);
	//alert(tbl.rows[this.parentNode.indx].cells[this.indx].innerHTML);
	alert(tbl.rows[this.parentNode.rowIndex].cells[this.cellIndex].innerHTML+' --');
	//alert(this.parentNode.cells[this.indx].innerHTML);
}

function getIndex(){
	this.style.backgroundColor = '#eee';
	rw.value = this.rowIndex;
}
