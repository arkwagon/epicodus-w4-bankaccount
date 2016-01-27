describe ("BankAccount", function() {
  it("will create an account with the following information", function() {
    var myAccount = new BankAccount("Bucky",25);
    expect(myAccount.name).to.equal("Bucky");
    expect(myAccount.balance).to.equal(25);
  });
  it("will create a prototype concatenating Name and Balance", function() {
    var myAccount = new BankAccount("Bucky",25);
    expect(myAccount.nameAndBalance()).to.equal("Account Holder - Bucky: Current Balance = $25");
  });
  it("will create deposit method to add to the balance", function() {
    var myAccount = new BankAccount("Bucky",25);
    myAccount.deposit(10);
    expect(myAccount.balance).to.equal(35);
  });
  it("will create withdrawal method to subtract from the balance", function() {
    var myAccount = new BankAccount("Bucky",25);
    myAccount.withdrawal(10);
    expect(myAccount.balance).to.equal(15);
  });
});
