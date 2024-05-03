{

    //using interface in generics

    interface generic<T, Y > {
        name : string;
        laptop:{
            model:string;
            release:number
        };
        extras:T;
        mac?:Y;
    }

    interface mobile {name: string; release:number}
    interface Mac {
        ache:boolean;
    }

    const user1 : generic<mobile ,null > = {

        name:'Turan',
        laptop:{
            model:'Hp Elitebook 840',
            release:2017,
        },
        extras:{
            name:'Redmi note 10 pro',
            release:2021    ,
        }
    }

    const user2 : generic<mobile, Mac > ={
        name:'practise',
        laptop:{
            model:'HP',
            release:2012,

        },
        extras:{
            name:'10 pro',
            release:2021,

        },
        mac:{
            ache:false
        }
    }















































}