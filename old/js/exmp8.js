window.onload = initAll;

var count = 0;
var obj = null;
var e1,e2;
var btn1,btn2;

function initAll(){
	e1 = document.getElementById('kx');
	e2 = document.getElementById('ky');
	
	btn1 = document.getElementById('abc1');
	btn1.onclick = move;

	btn2 = document.getElementById('abc2');
	btn2.onclick = move;

	var arr1 = e1.childNodes;
	for(var i=0;i<arr1.length;i++){
		arr1[i].indx = count++;		
		arr1[i].onclick = function(){ 
									obj = this;
									this.style.backgroundColor = '#eee';
									if(this.parentNode.id=='kx'){										
										btn2.disabled = true;
									}else{										
										btn1.disabled = true;
									}
								};
	}

	var arr2 = e2.childNodes;
	for(var i=0;i<arr2.length;i++){
		arr2[i].indx = count++;
		arr2[i].onclick = function(){ 
									obj = this;
									this.style.backgroundColor = '#eee';
									if(this.parentNode.id=='kx'){
										btn2.disabled = true;
									}else{
										btn1.disabled = true;
									}
								};
	}

	
}

function move(){
	/*
	if(this.name=='a1'){
		e2.appendChild(e1.firstChild);
	}else{
		e1.appendChild(e2.firstChild);
	}*/
	
	if(this.name=='a1'){		
		e2.appendChild(obj);
		obj.style.backgroundColor = '';
		btn1.disabled = false;
		btn2.disabled = false;
	}else{
		e1.appendChild(obj);
		obj.style.backgroundColor = '';
		btn1.disabled = false;
		btn2.disabled = false;
	}
}

