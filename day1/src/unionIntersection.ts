{

    //Union Types
    //either this or this

    type Complete = true | false
    const course:Complete = false

    // another example

    type User ={
        name:string;
        email?:string;
        gender:"Male"|"Female"
    }
    const user1:User={
        name:'gg',
        gender:"Male"
    }



    //Intersection

    type Front ={
        skills:string[];
        designation1:'Frontend';
    };
    type Back ={
        skills:string[];
        designation2:'Backend';
    };
    type FullStack = Front & Back
    const dev : FullStack ={
        skills:["React", "Express"],
        designation1:"Frontend",
        designation2:"Backend"
    }
    























}