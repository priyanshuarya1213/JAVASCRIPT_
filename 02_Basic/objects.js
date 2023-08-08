// Singleton  


// Object.create

// Object literals

const mySyn = Symbol("key1")

const jsUser = {
    name:"Priyanshu",
    "full name": "Priyanshu Arya",
    [mySyn]:"myKey1",
    age: 22,
    location:"Ghaziabd",
    email:"Priyanshu@google",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySyn]);

jsUser.email = "Priyanshuarya@google.com"
// Object.freeze(jsUser)
jsUser.email = "Priyanshuarya1213@google.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

