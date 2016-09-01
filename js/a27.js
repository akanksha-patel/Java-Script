window.onload = initAll;

function initAll(){
	//Case 1:	
	//var count = document.forms[0].length;
	//alert(count);
	
	//Case 2:
	/*
	var sbm = document.getElementById('sbm');
	sbm.onclick = function(){
							var frm = document.forms[0];
							for(var t=0;t<frm.length;t++){
								alert(frm[t].value);
							}
						};*/
	

	//Case 3:
	/*
	var sbm = document.getElementById('sbm');
	sbm.onclick = function(){
							var frm = document.forms[0];
							var elms = frm.elements;
							for(var t=0;t<elms.length;t++){
								alert(elms[t].value+" +");
							}
						};*/
	
	
	//Case 4:
	//var tmp = document.forms[0].name;
	//var tmp = document.forms[0].action;
	//var tmp = document.forms[0].method;
	//var tmp = document.forms[0].target;
	//var tmp = document.forms[0].id;
	//var tmp = document.forms[0].className;
	//alert(tmp);

	//Case 5:
	var frm = document.forms[0];
	//frm.onsubmit = validate;
	frm.elements[0].onblur = frmSubm;
}

//Case 5

function validate(){	
	//alert(this.elements);
	/*
	for(i=0;i<this.elements.length;i++){
		//alert(this.elements[i].type);	
		
		if(this.elements[i].type=='text'){
			this.elements[i].value='abc'+i;
		}
	}*/
	//return true;
	/*
	if(this.elements[0].value=='mohan'){
		this.reset();	
		return false;
	}*/
}

function frmSubm(){
	//alert(this);
	
	if(this.value=='mohan'){
		//alert(this.type);
		//alert(this.parentNode.type);
		//this.parentNode.submit();
	}
}