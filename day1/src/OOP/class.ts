{

    //class
    class Animal{
        // name:string;
        // species:string;
        // sound:string;

        //parameter property
        constructor( public name:string, public species:string, public sound:string ){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound(){
            console.log(`The ${this.name} is barking ${this.sound}`)
        }
    }

    const kukur = new Animal('kukur','dog', 'Ghew ghew' )

    kukur.makeSound();




















}