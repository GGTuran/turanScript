{

    //Constraints means enforcing something

    const addCourse = <T extends {id:number, name:string, mail: string}> (student:T)  =>{
        const course = 'Analog Communication';
        return{
            ...student,
            course
        }
    }

    const person1 = addCourse ({
        id:2023,
        name:'Bing',
        mail:'Chanadler Bong',
        
    })

    const person2 = addCourse ({
        id:999,
        name:'Joey',
        mail:'Ken adams',
        trade:'How you doin'
    })





































}