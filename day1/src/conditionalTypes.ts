{
    //conditional types

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false;
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


    //using keyOf operator
    type Borolox = {
        car: string;
        Plane:string;
        club:string;
    }

    type Has<T> = T extends keyof Borolox ? true : false;
    type Have = Has<'Plane'>



}

