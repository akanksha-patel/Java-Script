window.onload = initAll;

var sel,i=2;

function initAll(){
	sel = document.getElementById('sel');
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

