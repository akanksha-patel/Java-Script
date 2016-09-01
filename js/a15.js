window.onload = initAll;

var fld,sp;
function initAll(){
	fld = document.getElementById('fld');
	sp = document.getElementById('sp');	
	
	//fld.onfocus = onFoc;
	//fld.onblur = onBlr;
	//fld.onselect = onSel;
	
	//document.forms[0].onreset = onReset;
	document.forms[0].onsubmit = onSbm;	
}

function onSbm(){
	//Case 1:
	//alert("sbm");
	
	/*
	if(fld.value){
		alert("form submitted...");
		return true;	
	}else{
		alert("form not submitted...");
		return false;
	}	*/
	
	return confirm('Your Form Submitted');
}

function onReset(){
	alert('Your Form Reset');
}

function onSel(){
	sp.innerHTML = 'You have selected: ';
}

function onFoc(){
	sp.innerHTML = 'welcome again';
}

function onBlr(){
	if(!this.value){
		sp.innerHTML = 'Please enter some value';
	}else{
		sp.innerHTML = 'You are leaving the field';
	}	
}