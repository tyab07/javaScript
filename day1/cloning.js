let a =
{
    length: 5,
    bridth:6
}

//firt method:
// let b = Object.assign({},a);
//Second method:
// for(key in a)
// {
//  b[key] = a[key];
// }
//Third method:
let b ={...a};
a.length = 11;
console.log(b.length);