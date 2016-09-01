window.onload = initAll;

var sel,btn1,btn2,add,i=2;
var tx;
function initAll(){
	sel = document.getElementById('sel');
	btn1 = document.getElementById('btn1');
	btn2 = document.getElementById('btn2');
	add = document.getElementById('add');
	tx = document.getElementById('tx');

	//Case 1:
	/*
	btn1.onclick = function(){ 
								sel.disabled = true;
						   };

	btn2.onclick = function(){ 
								sel.disabled = false;
						   };
	
	*/
	
	//Case 2:
	//sel.size = 2;
	//sel.multiple = true;
	//sel.size = 3;
	//alert(sel.multiple);	
	/*
	add.onclick = function(){
							sel.size = i++;
						};*/
		
		

	//Case 3:
	//alert(sel.length);
	//alert(document.forms[0].length);

	//Case 4:
	sel.onchange = func1;

	function func1(){
	var opts = sel.options;	
	for(var t=0;t<opts.length;t++){
		//alert(opts[t].text);	
		tx.style.background-color=this.options[this.selectedIndex].style.color="pink";	
	}
	}
	//Case 5:
	//sel.onchange = func;
}

function func(){
	//alert(this);
	//alert(this.selectedIndex);
	//alert(this.options[this.selectedIndex].text);
	tx.value = this.options[this.selectedIndex].text;
}

