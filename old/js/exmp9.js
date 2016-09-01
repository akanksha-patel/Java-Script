window.onload = initAll;

var ul = null;
function initAll(){
	ul = document.getElementById('kx');
	var btn = document.getElementById('abc1');

	btn.onclick = remove;
}

function remove(){
	//ul.removeChild(ul.firstChild);
	ul.removeChild(ul.lastChild);
}