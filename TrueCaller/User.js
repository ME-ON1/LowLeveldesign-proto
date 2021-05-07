const Account = require("./Account");
const GlobalContact = require("./GlobalContact");

class User extends Account {
	constructor() {
		super();
		this.usersContacts = {};
		this.userSpam = {} ;
		this.userBlockList = {} ;
	}

	addUserContact(userInfo) {
		this.usersContacts[userInfo.phoneNumber] = { userInfo };
		GlobalContact.pushUserInformation(userInfo)
	}

	addToUserBlockList(ListContact) {
		if(Array.isArray(ListContact) === true ) {
			ListContact.forEach(i =>{
				this.userBlockList[i] = true
			})
		}else if(![undefined , null].includes(ListContact) && !isNaN(ListContact) ){
			this.userBlockList[ListContact] = true ;
		}
	}

	removeBlackListNumber(phoneNumber) {
		delete this.userBlockList[phoneNumber]
	}


	addToUserSpam(userContact ) {
		this.userSpam[userContact] = true
		GlobalContact.addGlobalSpam(userContact)
	}


	removeSpamContact(userContact) {
		delete this.userSpam[ userContact ] ;
	}
}

module.exports = User;
