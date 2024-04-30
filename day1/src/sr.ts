{
    
//Spread Operators
//Using in array
const arr1 : string[] = ['gg', 'eee'];
const arr2 : string[] = ['XD', 'LMAO'];

 arr2.push(...arr1);  //getting all array

 //Using in Objects

 const food = {
    breakfast: 'Egg',
    lunch : 'Rice',
    dinner : 'milk'
 }

 const todo = {
    morning : 'code',
    afternoon : 'code',
    night : 'others stuff'
 }

 const dailyRoutine = {
    ...todo,
    ...food
 }

//Rest Operators

const castFriends = (...friends :  string[]) =>{
    friends.forEach((friend:string) => console.log(`Hi ${friend}`))
    
};

castFriends('Chandler', 'Ross', 'Joey', 'Monica', 'Pheobe', 'Rachel');


 


















}