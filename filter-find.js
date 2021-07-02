const people = [
    {name: 'bob', age: '20', position: 'developer'},
    {name: 'peter', age: '25', position: 'designer'},
    {name: 'susy', age: '30', position: 'the boss'},
    {name: 'anna', age: '36', position: 'intern'},
]

const youngPeople_ages = people.filter((person) => person.age < 30)
.map((person) => person.age);
// console.log(youngPeople_ages);

const reduce_result = people.reduce((acc, cur) => {
    // if (cur.age < 30) acc.push(cur.age);
    // return acc;
}, []);
console.log(reduce_result);

const typeMatchedOnes = people.filter((person) => {
    return person.age == 30;
})
console.log('no-type-check: ', typeMatchedOnes);

const object_var = {};
console.log('isArray? ', Array.isArray(typeMatchedOnes));
console.log(Array.isArray(object_var));

/* typeof function can't distinguish between object and arrays.
 Instead, we should use Array.isArray in this case. */

 const anna = people.filter((person) => person.age > 35);
 console.log(anna);
 const anna2 = people.find((person) => person.age > 35);
 console.log(anna2);