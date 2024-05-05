{
    //Access modifiers
    class BankAccount {
        public readonly id:string;
        public name:string;
        private _balance:number;

        constructor(id:string, name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addBalance(amount:number){
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    }

    const myAccount = new BankAccount ('69', 'gg', 0 )
    // myAccount.id = ''//can not changeable because it is readonly

    myAccount.addBalance(20);
    
    console.log(myAccount.getBalance());

    //We can also use protected instead of private if we want to use inheritance

}