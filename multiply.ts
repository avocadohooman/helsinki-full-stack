interface Values {
	value1: number;
	value2: number;
}

const parseArgument = (args: Array<string>): Values => {
	if (args.length != 4)
		throw new Error ('Only 4 arguments are allowed: run multiplu <value1> <value2>');
	if (!isNaN(Number(args[2])) && !isNaN(Number(args[3])))
	{
		return {
			value1: Number(process.argv[2]),
			value2: Number(process.argv[3])
		}
	}
	else
		throw new Error("Provided values are not numbers!");
}

const multiplicator = (a: number, b: number, printText: string) => {
	console.log(printText,  a * b);
}

try{
	const {value1, value2} = parseArgument(process.argv);
	multiplicator(value1, value2, "Multiplied ${value1} and ${value2}, the result is:");
}catch (e) {
	console.log('Error, something bad happened, message: ', e.message);
}