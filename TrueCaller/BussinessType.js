// const Bussiness = require("./Bussiness");
const TAGS = require("./Tags");

class BussinessType {
  #bussinesstype;
  constructor() {
    this.#bussinesstype = "";
  }

  set(type) {
    // this.#bussinessType = type;
  }
  get() {
    return this.#bussinesstype;
  }
}

module.exports = BussinessType;
