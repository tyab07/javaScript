// console.log('hello');
//  let prom = new Promise(function(resolve,reject)
// {
//     setTimeout(function()
// {
//     console.log('this is in promise');
// },3000)
// resolve(100);
// })
// console.log("after promise");
// console.log(prom.then(function (value)
// {
//     console.log(value);
// }));

let prom = new Promise(
function(resolve,reject)
{
  setTimeout(function()
{
    console.log("first promise is fullfilled");
},3000);
resolve(100);});

prom.then(function (value)
{
   console.log(value);
  let prom2 = new Promise(
function(resolve,reject)
{
  setTimeout(function()
{
    console.log("Second promise is fullfilled");
},5000);});
})