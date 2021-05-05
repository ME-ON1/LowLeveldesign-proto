const Account = require("./Account");
const GlobalContact = require("./GlobalContact");

class User extends Account {
	constructor() {
		super();
		this.usersContacts = {};
		this.userSpam = {} ;
	}

	addUserContact(userInfo) {
		this.usersContacts[userInfo.phoneNumber] = { userInfo };
		GlobalContact.pushUserInformation(userInfo)
	}


	addToUserSpam(userContact ) {
		this.userSpam[userContact] = true
		GlobalContact.addGlobalSpam(userContact)
	}


	removeSpamContact(userContact) {
		delete this.userSpam.userContact ;
	}
}

module.exports = User;
