// const tinderUser = new Object()
const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "sam"
 tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "arad@gmail.com",
    fullname: {
        userfullname: {
            fname:"raj",
            lname: "roy"
        },
    }
}

console.log(regularUser.fullname.userfullname.lname)

const obj1 = {name:"amay", age:12}

const obj2 = {email:"aera@gmail.com", location:"Jaipur"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)
// console.log(Object.keys(tinderUser));  //important
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'))

//destructuring
const course = {
    coursename:"JS in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);

