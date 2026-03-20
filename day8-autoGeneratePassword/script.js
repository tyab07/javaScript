
let range = document.getElementById('slider');
let numValue = document.getElementById("pNum");

range.addEventListener('input',function()
{
    numValue.textContent = range.value;
  
}  
);
let generateN= document.getElementById('generate');
generateN.addEventListener('click',function()
{
  let password ="";
   let length = numValue.textContent;
   if(!numBox && !sLetterBox && !cLetterBox && !symbolBox)
   {
    alert('password cant be generated')
   }
   else
   {
  for(let i =0;i<length; )
  {
    if(numBox)
    {
       password+=getNumber();
       i++;
    }
    if(sLetterBox)
    {
       password+=getSLetter();
       i++;
    }
    if(cLetterBox)
    {
       password+=getCLetter();
       i++;
    }
    if(symbolBox)
    {
       password+=getSymbol();
       i++;
    }
  }
  let paste = document.getElementById('Ppaste');
  paste.textContent=password;
}
    
 
});





getNumber=()=>{
   return  Math.floor(Math.random() * 10);
}

getCLetter=()=>
{
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

getSLetter=()=>
{
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

getSymbol=()=>
{
let symbols = "!@#$%^&*_+|',.<>?/~`";
return symbols[Math.floor(Math.random() * symbols.length)];
}

let numBox = false;
let cLetterBox = false;
let sLetterBox = false;
let symbolBox = false;
let capital = document.getElementById('checkbox1');
let small = document.getElementById('checkbox2');
let num = document.getElementById('checkbox3');
let symbol = document.getElementById('checkbox4');

capital.addEventListener('change', function () {
  if (capital.checked) {
     cLetterBox=true;
  } else {
   cLetterBox=false;
  }
});

small.addEventListener('change', function () {
  if (small.checked) {
     sLetterBox=true;
  } else {
   sLetterBox=false;
  }
});

num.addEventListener('change', function () {
  if (num.checked) {
     numBox=true;
  } else {
   numBox=false;
  }
});

symbol.addEventListener('change', function () {
  if (symbol.checked) {
     symbolBox=true;
  } else {
   symbolBox=false;
  }
});






