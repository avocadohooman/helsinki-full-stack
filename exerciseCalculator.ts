interface Exercise{
	perdioLength: number;
	trainingDays: number;
	success: boolean;
	rating: number;
	ratingDescription: string;
	target: number;
	average: number;
}

let array = [3, 0, 2, 4.5, 0, 3, 1];
const parseInput = (argc: Array<string>) : Array<number> => {
	let array2 = [];
	if (argc.length < 4)
		throw new Error("Usage: npm run calculateExercise <target value> <daily exercises e.g. '0 1 3' = 3 days: d0:0h, d1:1h, d2:3h")
	for (let i = 2; i < argc.length; i++)
	{
		if (isNaN(Number(argc[i])))
			throw new Error ("value is not a number")
		array2.push(parseInt(argc[i], 10));
	}
	return array2;
}

const calculateExercises = (data: Array<number>, target: number) : Exercise =>{
	let count = 0;
	let sum = 0;
	let des: string;
	let rating: number;
	if (!target || !data || !data.length)
		throw new Error ("Invalid input. Target needs to be at least 1 and the array can't be empty")
	for (var i = 0; i < data.length; i++)
		(array[i] > 0) ? count++ : 0;
	for (var i = 0; i < data.length; i++)
		sum += data[i];
	if (count >= target && (sum / data.length) < 1.5){
		rating = 2;
		des = "Good job, you met your target!"
	}
	else if (count > target && (sum / data.length) > 1.5){
		rating = 3;
		des = "Great job!"
	}
	else if (count < target){
		rating = 1;
		des = "Don't give up, next week you will crush your target!"
	}
	return {
		perdioLength: data.length,	
		trainingDays: count,
		success: (count >= target) ? true : false,
		rating: rating,
		ratingDescription: des,
		target: target,
		average: sum / data.length
	};
}

try{
	const array2: Array<number> =  parseInput(process.argv);
	let target: number;
	target = array2[0];
	array2.splice(0, 1);
	console.log(calculateExercises(array2, target));
}
catch(e){
	console.log("Error:", e.message);
}
