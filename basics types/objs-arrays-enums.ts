enum genderType {
  MALE = "MALE",
  FEMALE = "FEMALE",
} // enum Type
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
  gender: genderType;
  number: any //can't use any 
} = {
  name: "Manthan",
  age: 23,
  hobbies: ["Reading", "Coding"],
  role: [4, "Admin"],
  gender: genderType.MALE,
};
console.log(person.age);

//Nested Objects & Types
let product: {
  id: string;
  price: number;
  tags: string[];
  favourites: any[]; // Store any diffrent types
  details: {
    title: string;
    description: string;
  };
} = null;
