const { Bussiness } = require("./Bussiness");
const { Address } = require("./Address");
const { ContactInfo } = require("./ContactInfo");
const { Gender } = require("./Gender");
const { Plan } = require("./Plan");
/**
 * @gender -
 * @dob - dob setter
 */
class PersonalInfo {
  constructor() {
    this.dob = "";
    this.gender = "";
    // this.userContact = new ContactInfo();
    this.Bussiness = "";
    this.userPlan = new Plan();
    this.name = "";
    this.email = "";
    this.username = "";
    this.countryCode = "";
    this.CreatedAt = new Date();
    this.personalAddress = new Address();
  }
  /**
   *
   * @dob {srting }
   * @gender {string }
   */
  setPersonalInformation(dob, gender) {
    this.dob = dob;
    this.gender = gender;
  }
  /**
   *
   * @param {string } username
   * @param {string} plan
   * @param {string } email
   * @param {Number } phonenumber
   * @param {string } countrycode
   * @param {bussiness details} opts
   */

  setUserDetails(username, plan, email, phonenumber, countrycode, opts) {
    this.username = username;
    this.plan = plan;
    this.email = email;
    this.phonenumber = phonenumber;
    this.countryCode = countrycode;
    // if (opts.details !== undefined) {
    //   this.setBussiness(opts.details);
    // }
  }

  setBussiness(details) {
    this.Bussiness = new Bussiness();
    this.Bussiness.setBussinessName(details);
  }
}

module.exports = {
  PersonalInfo: PersonalInfo,
};
