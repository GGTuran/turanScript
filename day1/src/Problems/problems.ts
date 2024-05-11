{

  // function  filterEvenNumbers(numbers:number[]){
  //     const evenNumbers:number[] = [];
  //    for (let i = 0; i < numbers.length; i++){
  //     const index = i;
  //     const value = numbers[index];
  //     if(value % 2 === 0){
  //         evenNumbers.push(value);
  //     }
  //    }
  //    return evenNumbers;
  // }

  // const numbers:number[] = [1,2,3,4,5,6,7,8];
  // const evenNumbers = filterEvenNumbers(numbers);
  // console.log(evenNumbers); 
  

 
  // for (let i = 0; i < numbers.length; i++){
  //   const index = i;
  //   const value = numbers[index];
  //   if(value % 2 === 0){
  //       evenNumbers.push(value);
  //   }
  //  }
  



  // const numbers = [15.5, 2.3, 1.1, 4.7];

  // const sum = numbers.reduce(getSum, 0);

  // function getSum(total:number, num:number) {
  // return total + Math.round(num);
  // }

  // type Circle={
  //   radius:number;
  // };
  // type Rectangle={
  //   height:number;
  //   width:number;
  // };

//   function printArea(shape: Circle | Rectangle) {
//     if (shape instanceof Circle) {
//         const area = shape.radius * shape.radius * Math.PI;
//         console.log(`Area of the circle is ${area}`);
//     } else {
//         const area = shape.width * shape.height;
//         console.log(`Area of the rectangle is ${area}`);
//     }
// }





    //here we have to use repeat() method for repeating the string

    type RepeatString = (
      a:string,
      b:number
  ) => string;

  const repeatString : RepeatString = (a, b)=>{
     let string = a;
     let newString = string.repeat(b);
     return newString;
  };
  const result = repeatString('gg',3);
  // console.log(result);


      //To find the largest number in an array we can use Math.max() method

      function findLargestNumber(numbers:number[]):number{
        const largestNumber : number = Math.max(...numbers);
        return largestNumber;
      }
  
      const example:number[] = [19,14,21,23];
      const result : number = findLargestNumber(example);
      // console.log(result);






       //for returning the array of even Numbers we first need to get an empty array
    //and then we will push the even number by looping through the given array
    function  filterEvenNumbers(numbers:number[]){
      const evenNumbers:number[] = [];
     for (let i = 0; i < numbers.length; i++){
      const index = i;
      const value = numbers[index];
      if(value % 2 === 0){
          evenNumbers.push(value);
      }
     }
     return evenNumbers
  }

  const numbers:number[] = [1,2,3,4,5,6,7,8];
  const evenNumbers = filterEvenNumbers(numbers);
  console.log(evenNumbers); 






      //to get a reversed array we have to use the array method reverse();

    //as it can be any type of function we have to use generic type
    function  reverseArray<T>(arr : T[]) :T[]{
      return arr.reverse();
  }
  //now applying it
  const bool: boolean[] = [false,false,true];
  const result1 = reverseArray(bool);
  // console.log(result1);

  const str: string[] = ['Mango','Watermelon', 'Grapes'];
  const result2 = reverseArray(str);
  // console.log(result2);

  const num:number[] = [1,2,3,4,5,6];
  const result3 = reverseArray(num);
  // console.log(result3);



   //First we need to make the type alias and function
    //And then we will use date().getFullYear() method to extract the year

    type Book ={
      title:string;
      author:string;
      publishedYear:number;
  }

  function  isRecentBook ( book :Book):boolean {
      let givenYear = new Date().getFullYear();
      return givenYear - book.publishedYear <= 5;
      }


      const book1:Book = {
          title:'Ele-bele',
          author:'Humayun Ahmed',
          publishedYear: 1989,
      }

       const result = isRecentBook(book1);
      //  console.log(result);


          //There are some methods of type checking
    //i will use typeOf method with if else block
    function logString(value:unknown):void{
      if(typeof value === "string"){
          console.log(`${value}`)
      }else{
          throw new Error("Please provide a string!! we don't accept anything else ");
      }
  }
  logString('gg');
  // logString(76);

      //first we need to declare a class and then we will include the properties and method into the class
    //After that we will make an instance and simply call the method

    class Car {
      brand:string;
      model:string;
      year:number;

      constructor(
            brand:string,
            model:string,
            year:number){
          this.brand = brand;
          this.model = model;
          this.year = year
      }
      displayInfo(){
          const result = `Your car model is ${this.brand} ${this.model} ${this.year}`;
          return result;
          // console.log(result);
      }
  }

  //creating an instance
  const car = new Car('BMW', 'E30 M3', 1986);
  const result = car.displayInfo();
  // console.log(result);


  {

    // function  filterEvenNumbers(numbers:number[]){
    //     const evenNumbers:number[] = [];
    //    for (let i = 0; i < numbers.length; i++){
    //     const index = i;
    //     const value = numbers[index];
    //     if(value % 2 === 0){
    //         evenNumbers.push(value);
    //     }
    //    }
    //    return evenNumbers;
    // }
  
    // const numbers:number[] = [1,2,3,4,5,6,7,8];
    // const evenNumbers = filterEvenNumbers(numbers);
    // console.log(evenNumbers); 
    
  
   
    // for (let i = 0; i < numbers.length; i++){
    //   const index = i;
    //   const value = numbers[index];
    //   if(value % 2 === 0){
    //       evenNumbers.push(value);
    //   }
    //  }
    
  
  
  
    // const numbers = [15.5, 2.3, 1.1, 4.7];
  
    // const sum = numbers.reduce(getSum, 0);
  
    // function getSum(total:number, num:number) {
    // return total + Math.round(num);
    // }
  
    // type Circle={
    //   radius:number;
    // };
    // type Rectangle={
    //   height:number;
    //   width:number;
    // };
  
  //   function printArea(shape: Circle | Rectangle) {
  //     if (shape instanceof Circle) {
  //         const area = shape.radius * shape.radius * Math.PI;
  //         console.log(`Area of the circle is ${area}`);
  //     } else {
  //         const area = shape.width * shape.height;
  //         console.log(`Area of the rectangle is ${area}`);
  //     }
  // }
  
  
  
  
  
      //here we have to use repeat() method for repeating the string
  
      type RepeatString = (
        a:string,
        b:number
    ) => string;
  
    const repeatString : RepeatString = (a, b)=>{
       let string = a;
       let newString = string.repeat(b);
       return newString;
    };
    const result = repeatString('gg',3);
    // console.log(result);
  
  
        //To find the largest number in an array we can use Math.max() method
  
        function findLargestNumber(numbers:number[]):number{
          const largestNumber : number = Math.max(...numbers);
          return largestNumber;
        }
    
        const example:number[] = [19,14,21,23];
        const result : number = findLargestNumber(example);
        // console.log(result);
  
  
  
  
  
  
         //for returning the array of even Numbers we first need to get an empty array
      //and then we will push the even number by looping through the given array
      function  filterEvenNumbers(numbers:number[]){
        const evenNumbers:number[] = [];
       for (let i = 0; i < numbers.length; i++){
        const index = i;
        const value = numbers[index];
        if(value % 2 === 0){
            evenNumbers.push(value);
        }
       }
       return evenNumbers
    }
  
    const numbers:number[] = [1,2,3,4,5,6,7,8];
    const evenNumbers = filterEvenNumbers(numbers);
    console.log(evenNumbers); 
  
  
  
  
  
  
        //to get a reversed array we have to use the array method reverse();
  
      //as it can be any type of function we have to use generic type
      function  reverseArray<T>(arr : T[]) :T[]{
        return arr.reverse();
    }
    //now applying it
    const bool: boolean[] = [false,false,true];
    const result1 = reverseArray(bool);
    // console.log(result1);
  
    const str: string[] = ['Mango','Watermelon', 'Grapes'];
    const result2 = reverseArray(str);
    // console.log(result2);
  
    const num:number[] = [1,2,3,4,5,6];
    const result3 = reverseArray(num);
    // console.log(result3);
  
  
  
     //First we need to make the type alias and function
      //And then we will use date().getFullYear() method to extract the year
  
      type Book ={
        title:string;
        author:string;
        publishedYear:number;
    }
  
    function  isRecentBook ( book :Book):boolean {
        let givenYear = new Date().getFullYear();
        return givenYear - book.publishedYear <= 5;
        }
  
  
        const book1:Book = {
            title:'Ele-bele',
            author:'Humayun Ahmed',
            publishedYear: 1989,
        }
  
         const result = isRecentBook(book1);
        //  console.log(result);
  
  
            //There are some methods of type checking
      //i will use typeOf method with if else block
      function logString(value:unknown):void{
        if(typeof value === "string"){
            console.log(`${value}`)
        }else{
            throw new Error("Please provide a string!! we don't accept anything else ");
        }
    }
    logString('gg');
    // logString(76);
  
        //first we need to declare a class and then we will include the properties and method into the class
      //After that we will make an instance and simply call the method
  
      class Car {
        brand:string;
        model:string;
        year:number;
  
        constructor(
              brand:string,
              model:string,
              year:number){
            this.brand = brand;
            this.model = model;
            this.year = year
        }
        displayInfo(){
            const result = `Your car model is ${this.brand} ${this.model} ${this.year}`;
            return result;
            // console.log(result);
        }
    }
  
    //creating an instance
    const car = new Car('BMW', 'E30 M3', 1986);
    const result = car.displayInfo();
    // console.log(result);
  
  
  
  
  
  
  
  }





}