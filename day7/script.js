console.log('hello');
async function utility()
{
    // fetch is used to get data from the server
let p = await fetch("https://jsonplaceholder.typicode.com/post/1");
// json is used to convert the data into json formatss
let p2 = await p.json();
console.log(p2);
}

utility();
