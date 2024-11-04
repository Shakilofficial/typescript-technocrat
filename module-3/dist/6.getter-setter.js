class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    set Deposit(amount) {
        this._balance += amount;
    }
    get Balance() {
        return this._balance;
    }
}
const account = new BankAccount(1234, "John Doe", 1000);
account.Deposit = 500;
console.log(account.Balance); // 1500
/*
Explain the Working flow of the Code

1. The `BankAccount` class is defined with properties `id`, `name`, and `_balance`, and methods `Deposit` and `Balance`.
2. The `account` object is created using the `BankAccount` class, with an `id` of 1234, a `name` of "John Doe", and an initial balance of 1000.
3. The `Deposit` property is set to 500 using the `Deposit` setter method.
4. The `Balance` property is accessed using the `Balance` getter method, which returns the value of the `_balance` property.

*/
