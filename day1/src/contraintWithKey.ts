{

    //generic constraint with keyOf operator
    

    type Clothes = {
        top:string;
        bottom:string;
        foot:string;
    }

    //by using keyOf operator we can union a constraint generic
    
    type Outfit = keyof Clothes;

    const day1 : Outfit = "top";

    //By using constraint key of we can get the exact type and key we want  
    //An example
  
    const getKey = <X, Y extends keyof X>(obj:X, key:Y) =>{
        return obj[key]
    };

    const user = {
        name:'Turan',
        email:'@gmail.com',
        id:12,
    }

    const result = getKey (user, 'name');

















}