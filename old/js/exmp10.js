window.onload = initAll;

var e1,tx;
function initAll(){
	e1 = document.getElementById('kx');	

	var btn1 = document.getElementById('abc1');
	btn1.onclick = replace;	

	var btn2 = document.getElementById('abc2');	
	btn2.onclick = insBfor;
    
    tx = document.getElementById('tx');		
}

function insBfor(){
	var nwLi = document.createElement('li');
	var nwTx = document.createTextNode(prompt('Insert Value'));

	nwLi.appendChild(nwTx);
	//e1.insertBefore(nwLi,e1.lastChild);
	//e1.insertBefore(nwLi,e1.childNodes.item(2));
	e1.insertBefore(nwLi,e1.childNodes[3]);
	//e1.insertBefore(nwLi,e1.childNodes.item(tx.value-1));
}

function replace(){
	var nwLi = document.createElement('li');
	var nwTx = document.createTextNode(prompt('Insert Value'));

	nwLi.appendChild(nwTx);
	e1.replaceChild(nwLi,e1.lastChild.previousSibling.previousSibling);
}