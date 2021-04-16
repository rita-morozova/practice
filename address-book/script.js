function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts[contact.firstName] = contact;
};

AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
    if (this.contacts[id] != undefined) {
      return this.contacts[id];
    }
    return false;
};

AddressBook.prototype.deleteContact = function(id) {
    if (this.contacts[id] === undefined) {
      return false;
    }
    delete this.contacts[id];
    return true;
};

function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

// let addressBook = new AddressBook();
// let contact = new Contact("Ada", "Lovelace", "503-555-0100");
// let contact2 = new Contact("Grace", "Hopper", "503-555-0199");
// addressBook.addContact(contact);
// addressBook.addContact(contact2);
// addressBook.deleteContact(1);
// addressBook.contacts;