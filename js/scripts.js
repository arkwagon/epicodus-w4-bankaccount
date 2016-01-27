
function BankAccount(name, initialDeposit) {
    this.name = name;
    this.balance = initialDeposit;
}
BankAccount.prototype.nameAndBalance = function() {
  return "Account Holder - " + this.name + ": Current Balance = $" + this.balance;
}

BankAccount.prototype.deposit = function(cash) {
  this.balance += cash;
}

BankAccount.prototype.withdrawal = function(cash) {
  this.balance -= cash;
}
