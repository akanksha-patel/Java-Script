window.onload = initAll;

var add,box,msg;
function initAll(){
	add = document.getElementById('add');
	box = document.getElementById('box');
	msg = document.getElementById('msg');
	
	add.onclick = crNw;	
}

var count = 0;
function crNw(){
	var elm = document.createElement('input');
	elm.indx = count++;
	
	//Case 1, 2, 3:
	elm.className = 'elm';	
	
	//Case 2:
	/*
	var atr = document.createAttribute('name');
	atr.value = 'abc'+count;
	elm.setAttributeNode(atr);
	elm.onclick = function(){ 
							//alert(this.name+' *****');
							//alert(this.getAttribute('name')+' $$$$');
						};

	*/

	//Case 3: -- Or --
	/*
	elm.setAttribute('name','pqr'+count);	
	elm.setAttribute('placeholder','Mohan');
	//Case 3a
	elm.onclick = function(){ 
							//alert(this.name+' *****');
							//alert(this.getAttribute('name')+' $$$$');
						};*/
	//Case 3b
	//elm.onclick = evt;


	box.appendChild(elm);
}


function evt(){ 
	msg.innerHTML = this.getAttribute('name');				 
}

/*
function evt(){ 
	alert(this.name);				 
}*/