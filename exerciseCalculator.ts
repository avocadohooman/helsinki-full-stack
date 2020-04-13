interface Exercise{
	perdioLength: number;
	trainingDays: number;
	success: boolean;
	rating: number;
	ratingDescription: string;
	target: number;
	average: number;
}

let array = [1, 3, 3, 0, 3, 3, 1, 1];

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
		sum += array[i];
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
	console.log(calculateExercises(array, 4));
}
catch(e){
	console.log("Error:", e.message);
}
