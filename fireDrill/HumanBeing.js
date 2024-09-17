function HumanBeing(names){
	let hum = "";
	for (let index in names){
		hum += index + ": " +  names [index] + " ";
	}
	return hum;
	
}
	
let humanBeing = {FirstName: "Oluwadarasimi" , LastName: "Aragho", Age: 23};
console.log(HumanBeing(humanBeing));
	

