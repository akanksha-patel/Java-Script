


var win;
function openNewWin(){
	win = window.open('for_a39.html','My Win','scroll=auto,width=200,height=200');	
	//win.blur(); //-----x	
}


function moveWin(){
	win.moveBy(200,200);
	//win.moveTo(100,100);
	//win.focus();
}

function blur2(){	
	win.blur();//OK with IE	
}

function focus2(){
	win.focus();
}

function close2(){
	win.close();
}

function scroll(){
	win.scrollBy(0,50);
	//scrollTo(0,200);
}

