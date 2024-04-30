//Functions
//Normal function 
//Arrow function

function add (num1 : number, num2 : number = 5):number{
    return num1 + num2;
}

add(2,5);

//Arrow Function

const arrow = (num1 : number , num2 : number):number => num1 + num2;

//Object --> function would be known as method

const userGG = {
    name: 'gg',
    balance:0,
    addBalance(balance:number):number{
        return this.balance + balance;
        // return `${this.balance + balance}`  // for string
    }
}

//Using map method with mentioning type

const arr : number[] = [1,2,3];

const newArr : number[] = arr.map((elem:number) : number => elem*elem);