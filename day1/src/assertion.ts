{

    //type assertion
    //That means i can understand better type than typescript


    let any : any;

    any="Be good at javascript first";
    // (any as string)   //shows string methods

    any = 23;
    // (any as number)   //shows number methods




    const kgToGrm = (value: string | number):string | number | undefined =>{
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)*1000;
            return `The converted number is ${convertedValue}`
        }else if(typeof value === 'number'){
            return value * 1000;
        }
    }

    const result69 = kgToGrm('10000') as string
    const result = kgToGrm(6969) as number



    //let's see try catch block

    type customErr = {
        message:string
    }

    try {
        
    } catch (error) {
        console.log((error as customErr).message);
    }






































}