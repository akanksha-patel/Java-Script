window.onload = initAll;


function initAll(){
	//alert(Math.round(2.49));
	//alert(Math.round(2.5));
	//alert(Math.random());
	//alert(Math.max(12,52,789,34,98,102));
	//alert(Math.min(12,2));
	//alert(Math.PI);
	//alert(Math.sqrt(144));
	//alert(Math.ceil(2.01));
	//alert(Math.ceil(2.3));
	//alert(Math.floor(2.99999));

	var tmp = new Number('abc');

	//alert(tmp);//NaN(Not a Number)
	//alert(isNaN(tmp));
	
	var t = 'abc';
	//alert(isNaN(t));
	var t1 = '23';
	//alert(isNaN(t1));

	document.write(Math.round(Math.random()*5)+1);
}