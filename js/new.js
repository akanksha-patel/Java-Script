window.onload = initAll;

var nm,nm_,pw,pw_,registerForm,cnfpw,cnfpw_;

function initAll(){
	getAllElements();

	setValidation();
}

function getAllElements(){
	nm = document.getElementById('nm');
	nm_ = document.getElementById('nm_');
	pw = document.getElementById('pw');
	pw_ = document.getElementById('pw_');
	registerForm = document.getElementById('register-form');
	cnfpw = document.getElementById('cnfpw');
	cnfpw_ = document.getElementById('cnfpw_');
}

function setValidation(){
	nm.onblur = nmOnBlur;
	nm.onfocus = nmOnFocus;

	pw.onblur = pwOnBlur;
	pw.onfocus = pwOnFocus;

	cnfpw.onblur = cnfPwOnBlur;
	cnfpw.onfocus = cnfPwOnFocus;

	registerForm.onsubmit = registerFormSubmit;
}

function cnfPwOnBlur(){
	var flag = true;

	if(!cnfpw.value){
		cnfpw_.innerHTML = 'Confirm Password is required';
		cnfpw_.style.visibility = 'visible';
		flag = false;
	}

	if(cnfpw.value!=pw.value){
		cnfpw_.innerHTML = 'Confirm Password and Password must match';
		cnfpw_.style.visibility = 'visible';
		flag = false;
	}

	return flag;
}

function cnfPwOnFocus(){
	cnfpw_.innerHTML = '';
	cnfpw_.style.visibility = 'hidden';
}

function registerFormSubmit(){
	var flag = true;
	
	alert(nmOnBlur()+' '+pwOnBlur()+' '+cnfPwOnBlur());

	if(!(nmOnBlur()&&pwOnBlur()&&cnfPwOnBlur())){
		flag = false;
	}

	return flag;
}

function pwOnBlur(){
	var flag = true;

	if(!pw.value){
		pw_.innerHTML = 'Password is required!';
		pw_.style.visibility = 'visible';
		flag = false;
	}

	if(pw.value.length<6){
		pw_.innerHTML = 'Password must be greater than 5 characters!';
		pw_.style.visibility = 'visible';
		flag = false;
	}

	if(pw.value.length>10){
		pw_.innerHTML = 'Password must be less than 11 characters!';
		pw_.style.visibility = 'visible';
		flag = false;
	}

	return flag;
}

function pwOnFocus(){
	pw_.innerHTML = '';
	pw_.style.visibility = 'hidden';
}

function nmOnBlur(){
	if(!nm.value){
		nm_.innerHTML = 'Name is required!';
		nm_.style.visibility = 'visible';
		return false;
	}else{
		return true;
	}
}

function nmOnFocus(){
	nm_.innerHTML = '';
	nm_.style.visibility = 'hidden';
}