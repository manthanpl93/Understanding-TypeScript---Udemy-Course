// Return types
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result  ${num}`);
}

// Callback
function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combinedValue: (a: number, b: number) => number;
combinedValue = add;

console.log(printResult(combinedValue(5, 5)));

let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});
