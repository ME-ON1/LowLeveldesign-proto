class Address {
  constructor() {
    this.addressDetails = "";
  }
  getAdderss() {
    console.log(this.addressDetails);
  }
  setAddressDetails(addressDetails) {
    this.addressDetails = addressDetails;
  }
}

module.exports = {
  Address: Address,
};
