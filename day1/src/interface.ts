{


    //interface
    //similar as typeAlias but there's some difference between these two
    //type alias can be used for both primitive and non primitive data types
    //interface can only be used in non primitive data types

    type User0 = {
        name: string;
        age: number;
    }

    const user:User0 = {
        name:'Turan',
        age:12
    }
    //adding more property using type alias
    type UserWithMoney = User0 & { money : number}
    const takaWala : UserWithMoney={
        name:'teka',
        age:99,
        money:69696969,
    }

    // using interface
    interface User1{
        name:string;
        age:number;
    }

    const gg : User1={
        name:'gg',
        age:69,
    }

    //adding more properties with interface where you need to use keyword extends and then the object model
    interface UserWithJob extends User1{
        job:boolean
    }
    const job : UserWithJob={
        name:'job',
        age:23,
        job:true,
    }



    //we can make interface by extending a type
    interface GG extends User0 {
        role:string;
    }



    //in Javascript -->object, array--> object , function--> object

    //using interface for array
    interface Roll1{
        [ index: number] : number
    }
    const roll : Roll1 = [6,7,8]



    //we can use interface for functions too
    interface ADD {
        (num1:number, num2:number) : number
    }
     const add1:ADD = (num1, num2)=>{
        return num1 + num2
     }
















































































}