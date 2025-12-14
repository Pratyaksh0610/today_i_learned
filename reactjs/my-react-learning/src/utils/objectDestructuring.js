//object destructuring

const personal = {
  user: {
    profile: {
      name: "Pratyaksh",
      details: {
        age: 23,
        city: "Hisar",
      },
    },
  },
};
const {
  user: {
    profile: {
      name,
      details: { age, city },
    },
  },
} = personal;

console.log(name);
console.log(age);
console.log(city);
