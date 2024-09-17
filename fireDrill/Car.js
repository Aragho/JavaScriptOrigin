function Vehicle (car){
	
	for(let index in car){
		console.log(index,car[index]);
	}
	return "";
}
let car = {make: "Toyota", model: "camry", year:2021};
console.log(Vehicle(car));
	 