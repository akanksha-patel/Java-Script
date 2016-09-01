window.onload = initAll;

var intv,bk,tmot;

function initAll(){
	//Case 1a&b:
	//intv = setInterval(changeImg,1000);
	
	//Case 2:
	//tmot = setTimeout(changeImg2,3000);
	
	//Case 3:
	bk = document.getElementById('bk');
	bk.onkeyup = someFnc;
	//Case 3a:
	//intv = setInterval(changeImg,1000);
	//Case 3b:
	tmot = setTimeout(changeImg2,3000);	
}

function someFnc(){
	//Case 3a:
	//clearInterval(intv);

	//Case 3b:
	clearTimeout(tmot);
}

//Case 1a&b 2:
var count = 1;
function changeImg(){	
	document.images[0].src = 'images/b'+count+'.png';
	count++;
	if(count==6){
		count = 1;
		//Case 1b:
		//clearInterval(intv);
	}
}

function changeImg2(){	
	document.images[0].src = 'images/b'+4+'.png';	
}

