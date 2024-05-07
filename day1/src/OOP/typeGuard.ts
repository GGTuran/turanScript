{

    //by using typeOf

    const add = (param1:string|number, param2:string|number):string|number =>{
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1+ param2
        }else{
            return param1.toString() + param2.toString();  
        }
       
    }


    //using in guard

    type NormalUser ={ name: string;}
    type Admin = { name: string; role:'Admin'; }


    const getUser = (user : NormalUser | Admin) =>{
        console.log(user.name)
        if( "role" in user){
            console.log(user.role);   //we can access the role property by using type in guard
        }
    }

    const user:NormalUser = {
        name:'User'
    }
    const admin : Admin = {
        name:'Admin',
        role:"Admin",
    }

    getUser(admin);


    //using instanceOf
    class Animal {
        name : string;
        species: string;

        constructor( name:string, species:string){
            this.name = name;
            this.species = species;
        }

        getSound(){
            console.log("I am making some noise")
        }
    }

    class Dog extends Animal{
        constructor(name: string , species : string){
            super(name, species)
        }

        makeBark(){
            console.log('Ghew ghew')
        }
    }
    class Cat extends Animal{
        constructor(name: string , species : string){
            super(name, species)
        }

        makeMeow(){
            console.log('eee eee eee')
        }
    }


    const isDog = (animal:Animal): animal is Dog =>{
        return animal instanceof Dog;
    }
    const isCat = (animal:Animal) : animal is Cat =>{
        return animal instanceof Cat;
    }

    const getAnimal = (animal:Animal) =>{
        if(animal instanceof Dog){
            animal.makeBark();
        }else if(animal instanceof Cat){
            animal.makeMeow();
        }else{
            animal.getSound();
        }
    }

//    getAnimal(Animal)

    const dog1 = new Dog('kukur', 'ghew');
    const cat1 = new Cat('biali', 'eee');


    

//need to practice the instance of again
//

// const add = (sum:number, sum2:number):number =>{
//     return sum1 + sum2;
// }



console.log('string')






}