window.onload = initAll;


function initAll(){
	var ar1 = new Array('mohan','sohan','rohan');
	var ar2 = new Array('dinesh','ganesh','suresh');
	var ar4 = new Array('Apple','Banana','Graps');

	//Case 1:
	//alert(ar1);
	//alert(ar1.toString());
	
		
	//var ar3 = ar1.concat(ar2);
	//alert(ar3);	
	
	//var ar5 = ar1.concat(ar2,ar4);
	//alert(ar5);
	//alert(ar1);

	
	//Case 2:
	//ar1[3] = 'Rajesh';
	//alert(ar1);
	
	//ar1.push('Kartik');
	//alert(ar1);

	//var t = ar1.pop();
	//alert(t);
	//alert(ar1);
	

	//---
	//var t = ar1.shift();
	//alert(t);
	//alert(ar1);
	//ar1.unshift('rahul');
	//alert(ar1);

	
	//Case 3:	
	//var ar6 = ar3.slice(2,5);
	//alert(ar6);
	

	//first arg is the starting index
	//second arg is the number of elements -
	//from the start index to be replaced
	//rest of the args will be inserted in the start index.
	//ar3.splice(2,2,'mukesh','videsh');
	//alert(ar3);


	//Case 4:
	//alert(ar1);
	//ar1.reverse();
	//alert(ar1);

	
	
	//Case 5a:
	//var ar7 = new Array(55,41,2,9,78,6);
	//ar7.sort(); //--x	
	//alert(ar7);

	//Case 5b:
	/*
	var func = function(a,b){ 
					   return a-b; 
				   };
	ar7.sort(func);
	alert(ar7);*/
	
	
	/*
	var ar7 = new Array('s','n','k','z','o','e');	
	ar7.sort();
	alert(ar7);
	*/

	/*
	var ar8 = new Array('rahul','Srjun','kartik');
	ar8.sort();
	alert(ar8);*/
}


