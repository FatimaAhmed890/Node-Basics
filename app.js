//BROWSER JS

// window.document.querySelector('.nav-open');
// window.console.log("hello hello");
// const name = "john";
// console.log(window.name);
// const sayName = () => {
//     console.log(name);
// }
// window.sayName();


//NODE JS

// (function(exports, require, module, __filename, __dirname) {
//     //Module code actually lives here
// });



//importing
const getUserInfo = require('./userInfo');

//sayName();

//Now we are importing multiple functions from userInfo module 
//so we'll get an object imported here
// console.log(getUserInfo);

console.log(`directoryname: ${__dirname}`);
console.log(`filename: ${__filename}`);