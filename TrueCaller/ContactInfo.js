const Bussiness = require("./Bussiness")

class ContactInfo {

	constructor() {
		this.phoneNumber = ""
		this.contactName = ""
		// this.bussinessDetails = "";
	}

	set(contactName, contactNumber, opts) {
		this.contactName = contactName;
		this.phoneNumber = contactNumber;
		if (opts != null || opts != undefined) {
			this.bussinessDetails = new Bussiness().setbussinessName(opts);
		}
		return this ;
	}

	getContactInfo() {
		return {name : this.contactName , phoneNumber : this.phoneNumber};
	}
}

module.exports = ContactInfo;
