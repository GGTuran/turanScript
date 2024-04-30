// Reference type --> Object

const user : {
    firstName : string;
    lastName : string;
    job: boolean;
    institution : 'HSTU';  //type--> literal types
    cg ?: number;   //Optional Types
} = {
    firstName : 'Tayyab',
    lastName : 'Turan',
    job : false,
    institution : 'HSTU'
}


// user.

//We can use access modifier in object
//These are public,private and readOnly modifier