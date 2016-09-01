window.onload = initAll;

var ab = null;
function initAll(){
	ab = document.getElementById('ab');
	var nm = 'Rajiv';
	var person = {fName:nm,lName:'Kumar',age:23,salary:50000,contact:'2323232'};
	
	//Case 1:
	//alert(person.fName);
	//alert(person.lName);
	//alert(person.age);
	//alert(person.salary);
	//alert(person.contact);
	
	//Case 2:
	
	for(tmp in person){
		//alert(person[tmp]);
		x = document.createElement('span');
		x.innerHTML = person[tmp]+', ';
		var br = document.createElement('br');
		ab.appendChild(x);
		ab.appendChild(br);
	}
}

