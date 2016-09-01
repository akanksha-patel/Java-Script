window.onload = initAll;

var ab = null;
function initAll(){
	ab = document.getElementById('ab');	
	
	var obj = new Object();
	
	//Case 1:
	//ab.innerHTML = obj;

	//Case 2,3:
	
	obj.fName  = 'Mohan';
	obj.lName  = 'Kumar';
	obj.age    = 12;
	obj.salary = 230000;
	//alert(obj.age);	

	//Case 3:
	//var t = 'salary';
	//alert(obj.t);  
	//alert(obj[t]);  
	//alert(obj.fName+' ***'); 
	//alert(obj['fName']);
	
	
	for(tmp in obj){		
		//alert(tmp);
		//alert(obj[tmp]);
		//alert(tmp+' : '+obj[tmp]);
		ab.innerHTML = ab.innerHTML + tmp+' : '+obj[tmp] + '<br />';
		
		//alert(obj.tmp); //----x
	}
}

