{


    //generic type
    //It mean's we can create dynamic types     

    type GenericArr<T> = Array<T>

    const rolls : GenericArr<number> = [1,2,3,4,5];
    
    const names : GenericArr<string> = ['gg'];

    const bools : GenericArr<boolean> = [true];


    //array of objects using generics

    const beboharkari : GenericArr<{ name:string; age: number }> = [
        {
            name:'gg',
            age:69,
        }
    ];


    //generic tuple

    type genericTuple<X,Y> =   [X, Y] 
    const stringtuple : genericTuple<string, string> = ['gg', 'bingo'];
    const objectTuple : genericTuple<number, {name:string; job:boolean}> = [1234, { name:'gg', job:false }]






































































}