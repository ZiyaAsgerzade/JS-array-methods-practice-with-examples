const persons = [
  {
    id: 1,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 2,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 3,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041,
  },
  {
    id: 4,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "female",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012,
  },
];


// Gender-ə əsasən filter işini görün


let femalegen;
let malegen;


femalegen = persons.filter((person) => person.gender === 'female')
malegen = persons.filter((person) => person.gender === "male");

console.log(malegen);

console.log(femalegen);





// Verilen arrayda id-e gore find  işini görün


let result;

result= persons.find((person) => person.id == "4")
 console.log(result)

//  
 
// Gender-ə əsasən hər birinin "male" ya da "female" olma ehtimalını yoxlayın (some vs every)

let result2;
let result3;

result2 = persons.every((persons) => persons.gender === "male")
result3 = persons.some((persons) => persons.gender === "male")


console.log(result2)
console.log(result3)

// 

