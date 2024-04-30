{


    //ternary || optional chaining || nullish coalescing operator

    //Ternary Operator
    const age : number = 19;
    if (age >= 18) {
        console.log("buira");
    }else{
        console.log("choto")
    }

    const isAdult = age>=18 ? 'boyosko' : 'jowan'
    console.log({isAdult});



    //nullish coalescing operator
    const authenticated = undefined;
    const result = authenticated ?? 'mehman';
    console.log({result});

    //optional chaining with nullish

    type User = {
        name:string;
        address:{
            city:string;
            address?:string;
        },
    };
    const user1:User = {
        name:'gg',
        address:{
            city:'hell',
        },
    };

    const adress = user1?.address?.address ?? 'Nai'
    console.log({adress})































}