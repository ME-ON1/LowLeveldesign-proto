class GlobalContact {
  //tglobalContacts;
  //#globalSpam;
    static globalContacts = {};

    static globalSpam = {};
  /**
   *
   * @param {User} contactsInformation
   */
  static pushUserInformation(userInfo) {
    GlobalContact.globalContacts[userInfo.phoneNumber] = userInfo;
  }

  /**
   *
   * @param {User } spamUser
   */
  static addGlobalSpam(spamUser) {
    GlobalContact.globalSpam[spamUser.phoneNumber] = true ;
  }

  /**
   *
   * @param {PhoneNumber INT} queryPhoneNumber
   */

  static checkSpam(queryPhoneNumber) {
    if (this.globalSpam[queryPhoneNumber]) {
      return this.globalSpam[queryPhoneNumber];
    }
  }

  static getGlobalContact() {
    return this.globalContacts;
  }
}

module.exports = GlobalContact;
