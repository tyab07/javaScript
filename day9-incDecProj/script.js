let num = 0;

let min = document.getElementById('box1');
let max = document.getElementById('box3');
let display = document.getElementById('num1');

min.addEventListener('click', function () {
  num -= 1;
  display.textContent = num.toString();
  Object.assign(min.style,{
    backgroundColor:"blue",
    color:"red"
  })
});

max.addEventListener('click', function () {
  num += 1;
  display.textContent = num.toString();
});
