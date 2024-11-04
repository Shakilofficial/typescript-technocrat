// Access Modifiers
{
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance += amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    const account = new BankAccount(1234, "John Doe", 1000);
    console.log(account.getBalance()); // 1000
    account.addDeposit(500);
    console.log(account.getBalance()); // 1500
}
/*
Explain the Working flow of the Code

1. The `BankAccount` class is defined with properties `id`, `name`, and `_balance`, and methods `addDeposit` and `getBalance`.
2. The `account` object is created using the `BankAccount` class, with an `id` of 1234, a `name` of "John Doe", and an initial balance of 1000.
3. The `getBalance` method is called on the `account` object, which returns the value of the `_balance` property.
4. The `addDeposit` method is called on the `account` object, which adds 500 to the `_balance` property.
5. The `getBalance` method is called on the `account` object again, which returns the updated value of the `_balance` property.


*/
