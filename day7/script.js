console.log('hello');
async function utility()
{
let p = await fetch("https://jsonplaceholder.typicode.com/post/1");

let p2 = await p.json();
console.log(p2);
}

utility();
