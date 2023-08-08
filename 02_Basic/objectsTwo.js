// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Samm"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "samm@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Priyanshu",
            lastname:"Arya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

const obj2 = {
    4:"d",
    5:"e",
    6:"f"
}
const obj3 = {
    7:"g",
    8:"h",
    9:"i"
}



// const obj3 = {obj1, obj2}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id:1,
        email:"arya@gmail.com"
    },
    {
        id:1,
        email:"arya@gmail.com"
    },
    {
        id:1,
        email:"arya@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'))



const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

// course.courseInstructor

const{courseInstructor:Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);

// {
//     "name":"Priyanshu",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]


// DStructuring
// const navbar = ({company}) => {

// }

// navbar(company = "Priyanshu")