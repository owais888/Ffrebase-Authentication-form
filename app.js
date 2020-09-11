// let obj = {

//     name : "Owais",
//     email : "Owais@gmail.com"
// }

// let name = obj.name;

// let arr = ["owais","Anas"]
// console.log(arr)

// let name =  [name0,name1] = arr
// console.log(name)

// Array


// function Expration

//  let foo = function(){

// console.log("Hello World")
//  }

// Arrow function

// let hello = (name1,name2 )=> {
// alert("My name is Owais")
// console.log('Hello Owais and abc')
// }

// hello("Owais" , "abs")

//  hello = () => "Owais"


// console.log(hello())



// setInterval(() => console.log("hello "),2000)
// setTimeout(); 

// setInterval(() =>  alert("owais"),5000)
// setTimeout(); 


// // let getData = (render_data)=>{
// //     firebase .database().ref('/').on("child_added",(data)=>{
// //         console.log(data.val())
// //     render_data()
// //     })
// // }
// // getData(render_data)
// // let render_data = ()=>{
// //     // console.log(data)
// }





// let getData = ( render_data) =>{

//    setTimeout(()=>{
// render_data
//    },4000)
// fetch('https://jsonplaceholder.typicode.com/todos/1')


// .then(response => response.json())
// .then(data  =>{
// render_data(json)
// .then(function(result){
// example(result)
// }

// .catch(function(error){
// console.log("error==>",error)
// })
// }
// getData(render_data)

// function example(data){
// let render_data = (name) =>{ 
//     console.log(name)
// }



// settimeout(() =>{

//   alert("owais"),5000
// })
// setTimeout(); 



// setTimeout(() => {


//     alert("aaaaa")
// }),5000
// setTimeout(() => {

// }, timeout);



// var student1 = {

//     name1: "Owais",
//     class1: 123,
//     roll1:345,
// }
//     var student2 ={


//     name2: "abx",
//     class2: 12,
//     roll2:34,

// }


// // for(var pro in student){

// //     console.log(pro,student[pro])
// // }

// for(var pro in student1,student2){
//     console.log(pro,student1,student2,[pro])
// }

// hello = "Owais";
// console.log(hello);
// hello()



// function Student(name,email){
//     this.name = name; 
// this.email = email

// }

// let student1 = new Student("Owais","Owais abs @gmail.con")

// console.log(student1)



// class Student {
//     constructor(name, email) {
//         this.name = "Owais"
//         this.email = "Owais@gmail.com"

//     }
// }



// class School extends Student {
//     constructor(name, email, School) {
//         super(name, email)
//         this.school = school

//     }
// }
// let student1 = new Student('owais','abc#gmail.com', "TSS")
// console.log(student1)
        

//  let signup = ()=>{
//      let email = document.getElementById("email")
//      let password = document.getElementById("password")

//      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
     
// .then((result)=>{
//     console.log(result)
// })


//      .catch(function(error) {
        
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...

// console.log(errorMessage )
//      });
//     }

let signup = () =>{
    
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let name = document.getElementById("name");
    let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let age = document.getElementById("age");


firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
.then((result)=>{
  console.log(result)
})

.catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
alert(errorMessage)
})


// ;email-password.html

  //   console.log(email.value)
  //   console.log(password.value)
  // console.log(name.value)
  // console.log(date.value)
  // console.log(month.value)
  // console.log(year.value)
  // console.log(age.value)


}
// 
// 




// let login = ()=>{

//   let email = document.getElementById("login-email");
//   let password = document.getElementById("login-password");

//   firebase.auth().signInWithEmailAndPassword(email.value, password.value)

  
//   .then((result)=>{
//     console.log("user successfully")
//     console.log(result)
//   })

//   .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)

      




//   })
// console.log(email.value)}
// console.log(password.value)
// }














