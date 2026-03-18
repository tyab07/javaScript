function createObject (length,width)
{
    
    
    return rectangle = {
    
        length :length ,
        width : width,

        show: function()
        {
            console.log("this is the rectangle")
        }
    }

}

let rec1 = createObject(6,9);
console.log(rec1.length);