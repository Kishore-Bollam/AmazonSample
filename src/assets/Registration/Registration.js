// function showAlert(){
//     alert("Your Form Submitted Sucessfully")
// }

// let attendees = ["kishore", "karthik","divya","nainika"];
// alert(attendees[1])

// var name = "kishore";
// alert(typeof(name));

//  phoneNumber = 6303130161;
// console.log(typeof(phoneNumber));


// phoneNumber = 6303130161;  // variable assiginment
// let phoneNumber; // variable declaration
// console.log(phoneNumber) // accesing the variable

// let attendees = ["kishore","kishore" ,"bollam"]
// console.log(attendees);

// let patients = new Array("kishohre" ,"bollam","karthik")
// console.log(patients[1]);


// var doctors = new Array("bollam" ,"bangaram","buddy", [1,2,3,4,5],"kishore");

// console.log(doctors[3][2]);



//CRUD-OPERTAIONS
//================================
 //CREATE/INSERT
 //*************
//add items to an array
//==================================================

//push == add item to last index postion
//======================================

// let attendees =[];
// attendees.push("kishore");
// attendees.push("karthik");
// attendees.push("bollam")
// console.log(attendees)
// attendees.push("gangaram")
// console.log(attendees)


//unshift === add to item to 0th index position
//==================================================

// let attendees=[]
// attendees.unshift("kishore");
// attendees.unshift("karthik");
// attendees.unshift("bollam");
// attendees.unshift("gangaram")
// console.log(attendees);


//spilce ==== add item to an array at  specific position.
//============================================
// let attendees=[]
// attendees.push("kishore");
// attendees.push("karthik");
// attendees.push("gangaram");
// attendees.push("bollam");
// console.log(attendees);
// attendees.splice(1,1,"karrimnagar","bangaram");
// console.log(attendees)

//READ THE ITEM BASED ON INDEX POSITION
//=================================
//READ/GET
//===========

// let attendees =["reactjs","angularjs","expreesjs","nodejs"];
// console.log(attendees[1]); //reactjs


//UPDATE
//=========
//UPDATE THE ITEM BASED ON THE INDEX POSITION
//===================================


// let attendees =["reactjs","angularjs","expreesjs","nodejs"];

// // attendees[4]="vue js"
// console.log(attendees)   //(5) ['reactjs', 'angularjs', 'expreesjs', 'nodejs', 'vue js']

// attendees[3]="python";
// console.log(attendees);  //(4) ['reactjs', 'angularjs', 'expreesjs', 'python']



//DELETE
//************** */
//delate items from the array
//===============================
//pop  == removes the last index from the array
//=====================================

// let attendees =["kishore" , "karthik" , "bollam"];
// console.log(attendees);
// attendees.pop()
// console.log(attendees)    //["kishire","karthik"]



//shift === removes first index form the array
//=============================================

// let attendees =["kishore" ,"karthik","bollam"];
// console.log(attendees);
// attendees.shift()
// console.log(attendees) // ["karthik" ,"bollam"]


//splice  == removes the item form the specific index postion
//===========================================

// let attendees =["kishore","karthik","bollam","kishore"];
// console.log(attendees)
// attendees.splice(1,1)
// console.log(attendees)   //["kishore","bolam","kishore"]


//   export function test(){
//     var Name = "kishore";
//     console.log(Name)
// }
// test()


// check variable is array or not ?

// let name="kishore"
//console.log(Array.isArray(name))  //false

/* let numbers = [1,2,3,4,5,6]
console.log(Array.isArray(numbers))   true

 let attendees = ["kishor","bollam","karthik"]
 console.log(Array.isArray(attendees))     //true  */


//Array search functions
//=========================

// indexof()

// let attendees=["kishore","karthik","bollam" ,"kishore"];
// console.log(attendees.indexOf("kishore"));   //0



// let attendees=["kishore","karthik","bollam" ,"kishore"];
// console.log(attendees.lastIndexOf("kishore"));   //3


//OBJECT ==>object is collection of datatype objecct represent specific item
//when to choose object
//=======================
//=> send collection of specific item t the database we will use object datatype

//there are two types of objects is there 
//1.literal object :- literal object represented with {}
// syntax:-
//==========

// var users = {key:value , key : value}
//  var users = {id:1,name:'kishore', age:25,email:"bollamkishore1995@gmail.com"};
// console.log(users["email"])
// console.log(users.email)

//2.obejct data type :- object data type represented with new key word
  
// var users = new Object({id:1,name:"kishore",age:25,email:"bollamkishore@gmail.com",Address:{Hno:96,street:"kukatpally",pincode:505503}})
// console.log(users);


// var x;
// console.log(x)


// function printScreen(){
//  window.print();
// }


// function nestedLoop(){
//     for(let i=1;i<=5;i++){
//         console.log("main loop")
//   for(let j=1;j<=5;j++){
//     console.log("inner loop")

//   }
//     }
// }
// nestedLoop()


// function nestedLoop(){
//     for(let i =1;i<=3;i++){
//         console.log("main loop")
//         for(let j = 1;j<=i;j++){
//             console.log("inner loop")
//         }
//     }
// }
// nestedLoop()

// function numPattern(){
//     for(let i = 1; i<=5;i++){
//         for(let j =1;j<=i;j++){
//             document.write("$")

//         }
//         document.write("<br/>")
//     }
// }
// numPattern();


// this keyword
// let student = {
//     firstName:"kishore",
//     lastName:"bollam",
//     fullName:function(){
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }
// student.fullName()
 

