{


    type UserName = string
    type IsAdmin = boolean
    const ami:UserName = 'GG'
    const access : IsAdmin = false

    //Type Alias

    type Student ={
        name:string;
        age:number;
        contact?:string;
        address:string;
    };

    const student1:Student={
        name:'Turan',
        age:22,
        address:'hell',

    }

    const student2:Student={
        name:'gg',
        age:11,
        address:'undefined',
        contact:'1234567890',
    }


    //Type Alias for function

    type Add = (num1:number, num2:number) => number;

    const add : Add = (num1,num2)=> num1 + num2











































}