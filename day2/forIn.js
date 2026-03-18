let arr = [1,53,98,27,6]
//the key in is used to get the indexes
for(let i in arr)
{
    console.log(arr[i]);
}
// the key of used to get the actual value

for(i of arr)
{
    console.log(i);
}