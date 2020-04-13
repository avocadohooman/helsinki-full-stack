type Operation = 'multiply' | 'add' | 'divide';
type Result = number;

const a: number = Number(process.argv[1]);
const b: number = Number(process.argv[2]);


const calculator = (a: number, b: number, op : Operation) : Result => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if( b === 0) throw new Error('Can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
}

console.log(calculator(a, b, );