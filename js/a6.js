window.onload = initAll;

function initAll(){
	//Case 1:
	
	var frms = document.forms;
	alert(frms.length);
	for(var i=0;i<frms.length;i++){
		alert(frms[i]);
	}

	//Case2:	
	//var frm  = document.forms[1];
	//alert(frm.name);

	//Case 3:	
	//var frm = document.forms['frm3'];
	//alert(frm+' ---- '+frm.name);

	//Case 4:	
	//var frm = document.forms['abc2'];
	//alert(frm.name+'----');
	
	//+++++++++++++++++++++++++Extra
	//Case 5:	
	//var x = 'abc3';
	//var frm = document.forms[x];
	//alert(frm.name+'----++++');

	//Case 6:
	//var frm = document.forms['1'];
	//alert(frm.name+'----'+frm.id);
}