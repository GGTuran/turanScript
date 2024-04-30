{

// Destructuring

//First object destructuring
 const user ={
    id:12,
    name:{
        first:'Tayyab',
        middle: 'Ameri',
        last: 'Turan',
    },
    contact:'1234567890',
    address:'hell',
 };

 const { 
    contact,
    name:{last},
  } = user;



//Array destructuring

const friends = ['Chandler', 'Joey', 'Ross', 'Monica', 'Rachel', 'Phoebe'];

const[,,bestfriend,...rest]  = friends;



















}