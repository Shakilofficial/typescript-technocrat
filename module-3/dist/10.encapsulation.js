{
    // Encapsulation in Object-Oriented Programming
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
Explain the working flow of the code above:

1. The BankAccount class is defined with three properties: id, name, and _balance. The id property is marked as public and readonly, the name property is marked as public, and the _balance property is marked as protected.
2. The addDeposit method is marked as protected, and the getBalance method is marked as public. This means that the addDeposit method can only be called from within the class, and the getBalance method can be called from anywhere.
3. The account object is created using the BankAccount class, with an id of 1234, a name of "John Doe", and an initial balance of 1000. The getBalance method is called on the account object, which returns the value of the _balance property.
4. The addDeposit method is called on the account object, which adds 500 to the _balance property. The getBalance method is called on the account object again, which returns the updated value of the _balance property.

Explain the difference between encapsulation and abstraction:
1. Encapsulation is the process of hiding the complexity of a system by breaking it down into smaller, more manageable parts. Encapsulation allows us to focus on the essential features of a system and ignore the irrelevant details.
2. Abstraction is the process of hiding the complexity of a system by breaking it down into smaller, more manageable parts. Abstraction allows us to focus on the essential features of a system and ignore the irrelevant details.

*/ 
