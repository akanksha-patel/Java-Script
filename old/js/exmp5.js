window.onload = initAll;


function initAll(){
	var y = document.getElementById('kk');

	//case 1:	
	//alert(y.nodeName);

	//case 2:
	//var elms = y.childNodes;	
	//alert(elms.length);

	//case 3:
	//var elm = y.firstChild;
	//alert(elm.nodeName);
	//alert(elm.firstChild.nodeName);
	//alert(elm.firstChild);
	//alert(elm.firstChild.data);
	//elm.firstChild.data = "yyyyyyy"
	//alert(elm.nodeType); //1
	//alert(elm.firstChild.nodeType); //3 

	//case 4:
	//var e1 = y.childNodes[1];
	//alert(e1.innerHTML);

	//var e2 = y.lastChild;
	//alert(e2.innerHTML);

	//var e3 = y.firstChild.nextSibling.innerHTML;
	//alert(e3);

	//var e4 = y.lastChild.previousSibling.previousSibling.innerHTML;
	//alert(e4);

	var e5 = y.lastChild.parentNode.nodeName;
	alert(e5);


}