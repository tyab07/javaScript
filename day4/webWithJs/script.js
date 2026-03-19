
// document.addEventListener("mousedown",function()
// {
//     let para1 = document.getElementById('para1');
//     let newpara = document.createElement('p');
//     newpara.textContent="i have clicked on the page";
//     para1.insertAdjacentElement('afterBegin',newpara);
    
// })

//using Different phases of the Event
function currStatus(event)
{
     if(event.target.nodeName==='P')
     {
         console.log(event.target.textContent);
    }
}

let newDiv = document.createElement('div');
     newDiv.addEventListener('click',currStatus);
for(var i =0;i<20;i++)
{
    let newPara = document.createElement('p');
    newPara.textContent=`This is the para ${i}`;
    newDiv.appendChild(newPara);
}
document.body.appendChild(newDiv);