function multiplyDemo1(x,y)
 {
     return x*y ;
 }
let res1 = multiplyDemo1(10,20);
console.log("Result 1: " + res1);

var multiplyDemo2 = (x,y)=>x*y;
let res2 = multiplyDemo2(20,30);
console.log("Result 2:" + res2);

// arrow function Example 

class Abc
{
    name="SunSoft";
    display()
    { 
        var xyz = this;
       setTimeout(function(){
        console.log(xyz.name)} , 3000);  // this is undefined 
        //setTimeout(()=>{
        //console.log(this.name)} , 3000);
    }
}
let a1 = new Abc();
a1.display();
class Xyz
{
   name ="SunSoft" ;
   display()
   {
       setTimeout(()=> {
           console.log(this.name)}, 5000);
   }
}
let a2 =new Xyz();
a2.display();