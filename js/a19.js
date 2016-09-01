window.onload = initAll;

var ab = null;
function initAll(){
	var p = new Person('Kartik','Kumar',22,78000);

	alert(p.fName);
	alert(p.lName);
	alert(p.age);
	alert(p.salary);

	p.chNm('Ganesh');
	//p.changeName("Vaibhav"); //------x

	alert(p.fName);
}

function Person(fName,lName,age,salary){
	this.fName = fName;
	this.lName = lName;
	this.age = age;
	this.salary = salary;

	this.chNm = changeName;

	function changeName(name){
		this.fName = name;
	}
}

