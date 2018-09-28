class Emp
{
    name ;
    age ;
    salary;
    desig ;
    constructor(name, age,salary, desig)
      {
       this.name = name ;
         this.age = age ;
       this.salary =salary;
         this.desig =desig ;
      
        }                          //npm install -g typescript - it will create js file before excution  
                                  // npm install -g ts-node  - for direct output without js file creation 

     display()
      { 
      console.log("Name: " + this.name);
      console.log("Age: " + this.name);
      console.log("salary: " + this.name);
      console.log("deign: " + this.name);
      console.log("...............................");
      }
  }
let e1 = new Emp("Raju" ,21, 159909 ,"clerk");
let e2 = new Emp("Mohan" ,25, 4559909 ,"progrmer");
let e3 = new Emp("Manju" ,27, 15349 ,"Manager");
e1.display();
e2.display();
e3.display();

