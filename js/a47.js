window.onload = initAll;

var tbl1,rows;
var curRow,curCol;

function initAll(){
	tbl1 = document.getElementById('tbl1');
	rows = tbl1.getElementsByTagName('tr');
	
	//setRowEffect();
	setColumnEffect();
}

function setColumnEffect(){
	for(i=0;i<rows.length;i++){
		var cols = rows[i].getElementsByTagName('td');
		
		for(j=0;j<cols.length;j++){
			cols[j].onmouseover = colOv;
			cols[j].onmouseout = colOut;
		}
	}
}

function colOv(){
	curCol = this;
	this.style.backgroundColor = 'green';
	this.style.color = 'red';
}

function colOut(){
	if(this.parentNode==curRow){
		this.style.backgroundColor = '#eee';
		this.style.color = 'black';
	}else{
		this.style.backgroundColor = '#fff';
		this.style.color = 'black';
	}
}


function setRowEffect(){
	for(i=0;i<rows.length;i++){
		rows[i].onmouseover = onOv;
		rows[i].onmouseout = onOut;
	}
}

function onOv(){
	curRow = this;
	this.style.backgroundColor = '#eee';
}

function onOut(){	
	this.style.backgroundColor = '#fff';
}