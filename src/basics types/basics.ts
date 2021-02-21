function addNumber(n1: number, n2: number, showResult: boolean, phrase: string) {
  const total = n1 + n2;
  if (showResult) {
    console.log(`${phrase}${total}`);
  } else return total;
}

{
  const num1 = 10;
  const num2 = 5;
  const printResult = true;
  const phrase = "Result is: ";
  addNumber(num1, num2, printResult, phrase);
}
