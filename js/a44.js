window.onload = initAll;

var m1,m2,m3,m4;
var u,e,p,r,cap;

function initAll(){
	m1 = document.getElementById('msg1');
	m1.msg = 'Please enter Username';
	m2 = document.getElementById('msg2');
	m2.msg = 'Please enter Email';
	m3 = document.getElementById('msg3');
	m3.msg = 'Please enter Password';
	m4 = document.getElementById('msg4');
	m4.msg = 'Please enter Repass';
	
	u = document.getElementById('unm');
	u.msg = m1;
	e = document.getElementById('eml');
	e.msg = m2;
	p = document.getElementById('pwd');
	p.msg = m3;
	r = document.getElementById('rpwd');
	r.msg = m4;
	
	cap = document.getElementsByTagName('caption')[0];
	u.onblur = e.onblur = p.onblur = r.onblur = chk;
	r.onkeyup = chk;

	document.forms[0].onsubmit = onSbm;
}

function chk(){
	if(!this.value){
		this.msg.innerHTML = this.msg.msg;
		this.msg.style.visibility = 'visible';
	}else{
		this.msg.style.visibility = 'hidden';
	}
	
	if(this.id=='pwd'){
		if(this.value.length<6){
			this.msg.innerHTML = 'Password must be at least 6 character length';
			this.msg.style.visibility = 'visible';	
		}else{
			this.msg.style.visibility = 'hidden';	
		}		
	}

	if(this.id=='rpwd'){
		if(p.value!=r.value){
			cap.innerHTML = 'password must match with the repass';
			cap.className = 'msg';
			cap.style.visibility = 'visible';	
		}else{
			cap.style.visibility = 'hidden';	
		}
	}
}

function onSbm(){
	m1.style.visibility = m2.style.visibility = m3.style.visibility = m4.style.visibility = cap.style.visibility = 'hidden';
	var flag = true;

	if(!u.value){
		m1.innerHTML = 'Please enter Username';
		m1.style.visibility = 'visible';
		flag = false;
	}
	
	if(!e.value){
		m2.innerHTML = 'Please enter Email';
		m2.style.visibility = 'visible';
		flag = false;
	}
	
	if(!p.value){
		m3.innerHTML = 'Please enter Password';
		m3.style.visibility = 'visible';
		flag = false;
	}
		
	if(p.value.length<6){
		m3.innerHTML = 'Password must be 6 character length';
		m3.style.visibility = 'visible';
		flag = false;
	}
	
	if(!r.value){
		m4.innerHTML = 'Please enter repassword';
		m4.style.visibility = 'visible';
		flag = false;
	}
	
	if(r.value.length<6){
		m4.innerHTML = 'RePassword must be 6 character length';
		m4.style.visibility = 'visible';
		flag = false;
	}
	
	
	if(p.value!=r.value){		
		cap.innerHTML = 'password must match with the repass';
		cap.className = 'msg';
		cap.style.visibility = 'visible';
		flag = false;
	}

	if(flag){
		
	}

	return flag;
}