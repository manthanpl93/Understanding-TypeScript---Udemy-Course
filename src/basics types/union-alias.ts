type combinable =  number | string
// Union Type
function combine(
  input1: combinable,// Type Alias
  input2: number | string, // Union Type
  resultConversation: "as-number" | "as-text" // union typw with literals
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversation == "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAge = combine(50, 30, "as-number");
console.log(combinedAge);

const combinedStringAges = combine("30", "20", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Manthan", "Patel", "as-text");
console.log(combinedNames);

//Type Aliases & Object Types
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!