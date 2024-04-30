{

    //Nullable types
    const searchName = (value:string | null)=>{
        if(value){
            console.log('Searching');
        }else{
            console.log("Nothing")
        }
    };
    searchName(null);


    //Unknown
    const speedInMeterPerSecond = (value:unknown) =>{
        if(typeof value === 'number'){
            const convertSpeed = (value * 1000) / 3600;
            console.log({convertSpeed})
        }else if (typeof value === 'string'){
            const [result, unit] = value.split(" ");
            const convertSpeed = (parseFloat(result) * 1000) / 3600;
            console.log({convertSpeed});
        }else{
            console.log('Vul')
        }
    }

    speedInMeterPerSecond('2000km/h');







    //Never type
    //when a function returns nothing it will be known as never type
    
    const throwError = (msg:string):never =>{
        throw new Error(msg);
    } ;
    throwError('VUL')


































}