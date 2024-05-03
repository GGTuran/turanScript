{


    //we can use generics in a function

    const createArrWithGenerics = <T> ( param:T ):T[] => {
        return [param];
    }

    const genericArr = createArrWithGenerics<string> ('1000');

    interface User {
        name:string;
        job:boolean;
    }
    const jobLess = createArrWithGenerics<User>({ name:'Turan', job:false });


    //Generic + Tuple

    const createArrWithTuple = <T, X> (param1:T, param2:X) : [T,X] =>{
        return [param1, param2];
    }

    const tupled = createArrWithTuple<string,boolean>('gg',true);
    const objTupled = createArrWithTuple<number, {name:string;}>(60, { name:'DDD' });


    const addCourse = <T> (student:T)  =>{
        const course = 'Analog Communication';
        return{
            ...student,
            course
        }
    }

    const person1 = addCourse ({
        name:'Bing',
        mail:'Chanadler Bong',
        
    })

    const person2 = addCourse ({
        name:'Joey',
        mail:'Ken adams',
        trade:'How you doin'
    })


















































}