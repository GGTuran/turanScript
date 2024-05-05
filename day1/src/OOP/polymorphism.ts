{
    //Polymorphism --> different acts of same thing
     class Person {
        getSleep(){
            console.log(`A person can sleep for 8 hours`)
        }
     }
     class Student extends Person{
        getSleep() {
            console.log(`A student also sleep 7-8 hours`)
        }
     }
     class Guard extends Person{
        getSleep() {
            console.log(`Guard can't sleep properly`)
        }
     }

     const getSleep = (param: Person) =>{
        param.getSleep()
     }

     const person1  = new Person();
     const person2  = new Student();
     const person3  = new Guard();

     getSleep(person3);

     //Another example for understanding polymorphism
     class Shape {
        getArea() : number{
            return 0;
        }
     }
     //calculating circle
     class Circle extends Shape {
        radius:number;
        constructor(radius:number){
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius ;
        }
     }
     //calculating rectangle
     class Rectangle extends Shape{
        height:number;
        width:number;
        constructor(heigth:number, width:number){
            super();
            this.height =  heigth;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width;
        }
     }
     const getShape = (param : Shape) =>{
          console.log(param.getArea());
     };

     const area1 = new Shape();
     const circle = new Circle(100);
     const rectangle = new Rectangle(15,25);

     getShape(area1);
     getShape(circle);
     getShape(rectangle);







}