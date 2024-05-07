{

    //Abstract by using interface

    //idea by using interface
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        runEngine(): void;
    }
    //Actual implementation through using class
    class Car implements Vehicle1{
        startEngine(): void {
            console.log(`start`);
        }
        runEngine(): void {
            console.log(`Runnnnnnnnnnn`);
        }
        stopEngine(): void {
            console.log(`Stop`);
        }
        test(){
            console.log('hakkao');
        }
    } 

    const audi = new Car();
    audi.startEngine();

    abstract class Jeep {
        abstract startEngine(): void ;
        abstract runEngine(): void ;
        abstract stopEngine(): void ;
        test(){
            console.log('hakkao');
        }
    }

    class Benz extends Jeep{
        startEngine(): void {
            console.log('restart');
        }
        runEngine(): void {
            console.log('run again');
        }
        stopEngine(): void {
            console.log('stop again');
        }
        test(): void {
            console.log('test again')
        }
    }

    // const jeep = new Jeep(); //can't create an instance from abstract class  
    const jeep = new Benz();


console.log('')




// console.log(first)
}