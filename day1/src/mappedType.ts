{

    //mapped types
    //Basically map returns an array

    const number:number[] = [1,2,3];
    const arrString : string[] = number.map(num=> num.toString());
    console.log(arrString) ;

    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber['height'];   //look up type

    type AreaString<T> = {
        [key in keyof T]:T[key];
    }

    const area : AreaString<{ height : string; width: number }> ={
        height:'nai',
        width:90,
    }










}