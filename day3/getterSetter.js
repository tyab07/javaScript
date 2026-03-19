let person =
{
    fName :'Tayyab',
    lName :'Mujahid',
    get fullName()
    {
       return `${this.fName} ${this.lName}`;
    },
    set fullName (name)
    {
     let value = name.split(' ');
     this.fName = value[0];
     this.lName = value[1];
    }

}
console.log(person.fullName);
//person.fullName('Zohaib Mujahid')
person.fullName = 'Zohaib Mujahid';
console.log(person.fullName);