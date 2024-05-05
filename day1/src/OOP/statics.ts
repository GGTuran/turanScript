{
    //static
    class Count{
        static count:number = 0;
        static increment(){
            return (Count.count = Count.count + 1);
        }
        static decrement(){
            return ( Count.count = Count.count - 1);
        }
    }

    const instance1 = new Count();
    // console.log(instance1.Count.increment()) 
    console.log(Count.increment())
    console.log(Count.increment())
    console.log(Count.increment())
    console.log(Count.increment())
    console.log(Count.increment())
    console.log(Count.increment())
    console.log(Count.increment())
    console.log(Count.increment())
    console.log(Count.increment())//9
    console.log(Count.increment())//10





}