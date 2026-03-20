//  print= async ()=>
// {
//     console.log("hello world");
// }

// print();
// print().then(function(value)
// {
//     console.log(value);
// })

callAsync = async()=>
{
let prom1 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        console.log('hello this is the promise 1');
         resolve("done 1");
    },5000
    );
   
})``
let p1= await prom1;
let prom2 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        console.log('hello this is the promise 2');
           resolve("done 2");
    },200
    );
      
})

let p2 = await prom2;
return [p1,p2];
}

callAsync();
