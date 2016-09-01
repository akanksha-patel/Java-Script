window.onload = initAll;

var tElm = null;
var spElm = null;
function initAll(){
	tElm = document.getElementById('nm');
	tElm.onblur = validateTheForm;
	tElm.onfocus = function(){ spElm.innerHTML = '';  }

	spElm = document.getElementById('msg');

	var frm = document.forms[0];

	frm.onsubmit = validateTheForm;
}

function validateTheForm(){
	if(tElm.value.length==0){
		//alert('Please Enter Some Value');
		spElm.innerHTML = 'Please Enter Some Value';
		return false;
	}else if(tElm.value.length<6){
		spElm.innerHTML = 'Please Enter at least 6 characters';
		return false;
	}

	
}