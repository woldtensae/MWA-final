

let bankAccount = {
    money: 2000,
    deposit(value:number):number {
       return  this.money += value;
    }
}

interface deposit{
    money: number;
    deposit: (value:number) => number;
}
interface account{
    name:string;
    bankAccount: deposit;
    hobbies: string[];
}

let myself: account = {
    name: 'Assad',
    bankAccount: bankAccount,
    hobbies: ['violin', 'Cooking']
};



myself.bankAccount.deposit(3000);
console.log(myself);

