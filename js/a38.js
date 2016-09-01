

var win;

function openNewWin(){
	win = window.open('a1.html','My Win','width=50,height=50');
}

function showResize(){
	//win.resizeBy(-50,-50);
	win.resizeTo(600,600);
}

