function Rectangle(lenth,width)
{
 this.length= lenth;
 this.width = width;
 this.show = function()
 {
    console.log("this is the rectangle")
 }
}

let rec1 = new Rectangle(5,6);
console.log(rec1.length);