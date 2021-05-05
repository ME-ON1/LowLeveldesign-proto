// import Tags from "./Tags";
const BussinessHours = require("./BussinessHours");
const BussinessType = require("./BussinessType");
const DAYS = require("./DaysEnum");
const TAGS = require("./Tags");

class Bussiness {
  #bussinessName;
  #bussinessDesc;
  #bussinessType;
  #bussinessHours;
  #bussinessSize;

  /**
   *
   * @type see {string } Tags file for types
   * @size {int } Size of the bussiness
   * @details {obj of with days and news values } bussiness hours init a hashmap of days with timeDate
   */
  constructor() {
    this.#bussinessName = "";
    this.#bussinessDesc = "";
    this.#bussinessType = "";
    this.#bussinessHours = "";
    this.#bussinessSize = "";
  }
  /**
   *
   * @param {string } name - set bussiness name
   * @param {string } desc - set bussiness description
   */
  setbussinessName({ name, desc, type, details, size }) {
    this.#bussinessDesc = desc;
    this.#bussinessName = name;
    if (type !== undefined) {
      this.#bussinessType = new BussinessType().set(type);
    }
    if (details != undefined) {
      this.#bussinessHours = new BussinessHours();
      this.#bussinessHours.setBussinessHours(details);
    }

    if (size != undefined) {
      this.#bussinessSize = size();
    }
  }

  // setBussinesType()
}

// const ui = new Bussiness();

module.exports = Bussiness;
