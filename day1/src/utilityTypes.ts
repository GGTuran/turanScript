{

    //Pick types
    //picking a type from another type
     type Person = {
        name:string;
        age:string;
        email:string;
        job?:boolean;
     }

     type NameAge = Pick<Person, 'name' | 'age'>

     //omit type
     //makes a type by excluding types from another type

     type Contact =  Omit<Person, 'name' | 'age'>

     //require types
     //basically requires everything

     type PersonRequire = Required<Person>

     //partial types
     //makes everything optional

     type Optioned = Partial<Person>


     //read only types

     type ReadOnlyFor = Readonly<Person>

     const person1:ReadOnlyFor = {
        name:'nai',
        age:'69',
        email:'nai'
     }

    //  person1.na/me = 'xyz'



    //record type

    type Myobj = Record<string,string>

    type Any = Record<string,unknown>  //by using this we can assign any value to the key

    const obj:Myobj = {
        a:"a",
        b:"b",
        c:'c',

    }



}