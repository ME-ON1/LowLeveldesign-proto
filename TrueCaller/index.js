const GlobalContact = require("./GlobalContact");
const User = require("./User");
const ContactInfo = require("./ContactInfo");
const util = require("util")

const user1 = new User();

user1.register("Tarun", "tarun", "start", 94777777, "+91", {});

user1.addUserContact(new ContactInfo().set("newma", 6544654465465));
user1.addUserContact(new ContactInfo().set("tarun", 9544444));
user1.addUserContact(new ContactInfo().set("name", 4554545445));


const user2 = new User()
user2.addUserContact(new ContactInfo().set("jhfjh", 5454545)) ;
user2.addUserContact(new ContactInfo().set("df", 5555 )) ;
user2.addToUserSpam(5555) ;
user2.removeSpamContact(5555)


user2.addToUserBlockList(5454545) ;
user2.removeBlackListNumber(5454545)

const i = JSON.stringify(GlobalContact.getGlobalContact(), null, 4) ;
console.log(GlobalContact.getGlobalContact(), i) ;

console.log(user2)
