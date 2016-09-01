window.onload = initAll;

var rw,cl,bt,tot;
function initAll(){
	rw = document.getElementById('rw');
	cl = document.getElementById('cl');
	bt= document.getElementById('bt');
	tot= document.getElementById('tot');

	bt.onclick = createChart;
}

var tab;
var count = 1;
function createChart(){
	tab = document.createElement('table');

	for(n=0;n<rw.value;n++){
		var row = tab.insertRow(n);	

		for(m=0;m<cl.value;m++){
			var col = row.insertCell(m);
			var img = document.createElement('img');
			img.stnum = count;
			img.src = "images/gray.png";
			img.stts = false;
			img.onclick = setSelected;
			col.innerHTML = count++;
			col.appendChild(img);
		}
	}	

	var bdy = document.getElementsByTagName('body')[0];
	bdy.appendChild(tab);
	
	//Case 1:
	/*
	var btn = document.createElement('input');
	btn.type = "button";
	btn.value = 'Save';

	btn.onclick = findwhichCheckBoxticked;
	bdy.appendChild(btn);*/
}

//Case 3:
function setSelected(){
	if(this.stts){
		this.src = 'images/gray.png';
		this.stts = false;
		amount = amount - basePrice;	
	}else{
		this.src = 'images/green.png';
		this.stts = true;
		amount = amount + basePrice;
	}	

	tot.innerHTML = "Total Amount: "+ amount;
}

//Case 2:
function setAmount(){
	if(this.checked){
		amount = amount + basePrice;
	}else{
		amount = amount - basePrice;	
	}

	tot.innerHTML = "Total Amount: "+ amount;
}


var amount = 0;
var basePrice = 120;
function findwhichCheckBoxticked(){
	var flag = false;
	var chkArr = tab.getElementsByTagName('input');
	
	for(j=0;j<chkArr.length;j++){
		var chk = chkArr[j];
		
		if(chk.checked){
			flag = true;
			amount = amount + basePrice;
		}
	}

	if(flag){
		var ttAmtBlock = document.createElement('span');
		ttAmtBlock.innerHTML = amount;
		tot.appendChild(ttAmtBlock);
	}	
}