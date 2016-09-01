window.onload = initAll;

window.onunload = function(){  alert('u r trying to leave'); };

function initAll(){
	var v = document.getElementById('nm');

	//alert(v);
	
	//Key-events
	//v.onkeyup = function(){ alert("-----");  };
	//v.onkeydown = function(){ alert("-----");  };
	//v.onkeypress = function(){ alert("-----");  };
	

	var x = document.getElementById('tx');
	//Mouse-Event
	//x.onmouseup = function(){ alert("-----");  };
	//x.onmousedown = function(){ alert("-----");  };
	//x.onclick = function(){ alert("++");  };
	//x.ondblclick = function(){ alert("@@");  };
	//x.oncontextmenu = function(){ alert("##");  };

	//mouse-move-events
	var bx = document.getElementById('box');
	//bx.onmouseover = function(){  alert('!!!!!!!!!!!'); };
	//bx.onmouseout = function(){  alert('!!!!!!!!!!!'); };
	//bx.onmousemove = function(){  alert('====='); };
	
	//form-field-events
	//v.onfocus = function(){  alert('focus'); };
	//v.onblur = function(){  alert('leaving'); };
	//v.onselect = function(){  alert('the text selected'); };
	//v.onselect = function(){  alert('the text selected'); };
	var frm = document.getElementById('frm');
	//frm.onreset = function(){  alert('u r trying to reset'); };
	//frm.onsubmit = function(){  alert('u r trying to submit'); };

	//window events
	//window.onload====
	//window.onabort = function(){  alert('u r trying to abort'); };
	//window.onblur = function(){  alert('u r trying to leave'); };
	//window.onerror ?????
	//window.onfocus = function(){  alert('u r trying to visit'); };
	//window.onmove ?????
	//window.onresize = function(){  document.write('Hello'); };
	//window.onscroll = function(){  alert('u r trying to scroll'); };
	
	
}