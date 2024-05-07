{

  function  filterEvenNumbers(numbers:number){
      const evenNumbers:number[] = [];
     for (let i = 0; i < numbers.length; i++){
      const index = i;
      const value = numbers[index];
      if(value % 2 === 0){
          evenNumbers.push(value);
      }
     }
     return evenNumbers;
  }

  const numbers:number[] = [1,2,3,4,5,6,7,8];
  const evenNumbers = filterEvenNumbers(numbers);
  console.log(evenNumbers); 
  

 



}