type Check = string;

interface Value {
	value1: number;
	value2: number;
}

const parseInput = (argc: Array<string>) : Value => {
	if (argc.length != 4)
		throw new Error ("Usage: npm run calculateBmi <weight> <height>");
	if (!isNaN(Number(argc[2])) && !isNaN(Number(argc[3])))
	{
		return {
			value1: parseInt(process.argv[2], 10),
			value2: parseInt(process.argv[3], 10)
		}
	}
	else
		throw new Error ("weight and height need to be a number");
}

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
	const {value1, value2} = parseInput(process.argv);
	console.log(bmiCalculator(value1, value2));
}
catch (e){
	console.log("Error:", e.message);
}
