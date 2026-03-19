//simple passing arguments function
// let a = 4;
// let b= 3;
// function sum(a,b)
// {
//     console.log(a+b);
// }
// sum(a,b);

//passing too many arguments
//we use the keyword arguments which is the object and store all the arguments passed to thhe function 
// function sum(a,b)
// {
//     total =0;
//     for(let value of arguments)
//     {
//       total+=value;
//     }
//     console.log(total);
// }
// sum(1,2,3,4,5,6,7);

//now if we use the ...args it will take all the arguments as the elements of the array and store in args

function sum(...args)
{
    total =0;
        console.log("sum of the  numbers ")
    for(let i = 0;i<args.length ; i++)
    {
        total +=args[i];
        console.log(i);
    }
    console.log("is");
    console.log(total);
}
sum(1,2,3,4,5,6,7,8);