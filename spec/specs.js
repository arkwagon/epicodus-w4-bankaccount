describe ("BankAccount", function() {
  it("it will create an account with the following information", function() {
    var myAccount = new BankAccount("firstName","lastName","balance");
    expect(myAccount.firstName).to.equal("firstName");
    expect(myAccount.lastName).to.equal("lastName");
    expect(myAccount.balance).to.eql([]);
  });
  
});
