type country = {
  name: string;
  independence: number;
  province: number;
  GDP: number;
  founderName: {
    name: string;
    age: number;
    height: number;
    education: string;
  };
};

let myCountry: country = {
  name: "Pakistan",
  independence: 1947,
  province: 4,
  GDP: 341,
  founderName: {
    name: "Muhammad Ali Jinnah",
    age: 72,
    height: 5.1,
    education: "Lawyer",
  },
};

console.log(`my country name is ${myCountry.name} and ${myCountry.founderName.name} is the founder of ${myCountry.name}`)