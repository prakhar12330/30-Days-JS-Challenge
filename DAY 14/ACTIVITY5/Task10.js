class Account {
    #balance = 1000000;
    constructor() {
        console.log(`Your Original balance at the start: Rs.${this.#balance}`)
    }
    set withdraw(amnt) {
        this.#balance -= amnt
        console.log(`You withdrawed Rs.${amnt}`)
    }
    set deposit(amnt) {
        this.#balance += amnt
        console.log(`You deposited Rs.${amnt}`)
    }
    get getBalance() {
        console.log(`Your current balance is: Rs.${this.#balance}`)
    }
}

let amount = new Account();
amount.withdraw = 3000
amount.getBalance
amount.deposit = 100000
amount.getBalance