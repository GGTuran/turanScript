{
    class BankAccount {
        public readonly id: string;
        public name: string;
        private _balance: number;

        constructor(id: string, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        //getter 
        get balance(){
            return this._balance
        }
        //setter
        set deposit(amount:number){
            this._balance = this._balance+amount;
        }
    }

    const myAccount = new BankAccount('69', 'gg', 0)
    // myAccount.id = ''//can not changeable because it is readonly
    console.log(myAccount.balance);
    









}