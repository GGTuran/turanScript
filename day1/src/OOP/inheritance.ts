{
    //inheritance


    class Parent {
        name:string;
        age:string;
        address:string;

        constructor( name:string, age:string, address:string ){
            this.name = name;
            this.age= age;
            this.address = address;
        }
        getSleep(numOfHours: number){
            console.log(`${this.name} sleeps ${this.getSleep} hours a day`);
        }

    }

    class Student extends Parent {
        constructor(name:string, age:string, address:string){
            super(name, age, address)
        }
    }

    const student1 = new Student('gg', '69', 'gg');

    class Teacher extends Parent{
        designation:string;
        constructor(name:string, age:string,address:string, designation:string){
            super(name,age,address)
            this.designation=  designation;
        }
    }












}