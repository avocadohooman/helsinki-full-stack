type Check = string;

const bmiCalculator = (weight: number, height: number) : Check =>{
	let bmi: number;
	height /= 100;
	bmi = weight / (height * height);
	if (!weight || !height)
		throw new Error ("Invalid input");
	if (bmi < 18.5)
		return "Underweight";
	else if(bmi >= 18.5 && bmi <= 25.0)
		return "Normal (healthy weight)";
	else 
		return "Overweight"
}

try{
	console.log(bmiCalculator(0, 0));
}
catch (e){
	console.log("Error:", e.message);
}
