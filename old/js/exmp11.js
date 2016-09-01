window.onload = initAll;

var abc,btn;
function initAll(){
	abc = document.getElementById('abc');
	btn = document.getElementById('btn');

	btn.onclick = addField;
}

function addField(){
	var tmpFld = document.createElement('input');
	
	var tmpAtr = document.createAttribute('type');
	tmpAtr.value = 'text';	
	tmpFld.setAttributeNode(tmpAtr);
	
	var tmpAtr2 = document.createAttribute('class');
	tmpAtr2.nodeValue = 'mno';
	tmpFld.setAttributeNode(tmpAtr2);
	
	abc.appendChild(tmpFld);
}