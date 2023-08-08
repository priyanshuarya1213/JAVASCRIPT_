const name = "Priyanshu"
const repoCount = 15

// console.log(name + repoCount + "Value");


// console.log(`Hello My name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('PriyanshuAryacom')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 6)
console.log(anotherString);

const newStringOne = "    Priyanshu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://priyanshu.com/priyanshu%20Arya"
console.log(url.replace('%20', '-'));

console.log(url.includes('Arya'));

console.log(gameName.split('-'));