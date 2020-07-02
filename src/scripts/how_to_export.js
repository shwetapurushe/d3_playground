//WAYS to export

//1.
// module.exports = {
//   foo: function () {
//     // whatever
//   },
//   bar: function () {
//     console.log("Hello Shweta Purushe, how are you today? ");
//   }
// };

/*Everything inside an ES6 module is private by default*/
var zemba = function() {};


//2.
//var foo = function(){}

function add(...args) {
  console.log("Adding");
  return args.reduce((num1, num2) => num1 + num2);
}

export {
  add
};
