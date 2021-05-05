const { PersonalInfo } = require("./PersonalInfo");
const { Plan } = require("./Plan");
const main = require("./index");

// const { PLAN } = require("./Plan");

const USERCATEGORY = require("./UserCategory");
class Account {
	constructor() {
		this.id = "";
		this.personalInfo = new PersonalInfo() ;
		this.passowrd = "";
	}

	register(name, passowrd, email, phoneNumber, countrycode, opts) {
		this.plan = new Plan(USERCATEGORY.FREE);
		this.id = Math.round(Math.random() * 100);
		this.passowrd = passowrd;
		this.personalInfo.setUserDetails(
			name,
			email,
			phoneNumber,
			countrycode,
			opts
		);
	}

	addContact(user) {
		main.pushUserInformation(user);
	}

	removeContact(contactDetails) {
		//main.removeContactInformation(contactDetails);
	}
}

module.exports = Account
