let student = [
{
    name :'tayyab',
    roll : 58
},
{
    name :'Ali',
    roll : 16
},
{
    name :'usman',
    roll : 10
}
] 
let st = student.find(function(st)
{
    return st.name=='tayyab'
})
console.log(st);