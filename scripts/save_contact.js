function saveContact() {
    const contact = navigator.contacts.create();
    contact.displayName = "Dave Machario";
    contact.nickname = "Dave";
  
    const name = new ContactName();
    name.givenName = "Dave";
    name.familyName = "Machario";
    contact.name = name;
  
    const email = new ContactField("email", "davemachario@gmail.com", false);
    contact.emails = [email];
  
    const phone = new ContactField("phone", "+85293457707", true);
    contact.phoneNumbers = [phone];
  
    const saveOptions = new ContactSaveOptions();
    saveOptions.contactSaveSuccess = function (contact) {
      alert("Contact saved successfully!");
    };
    saveOptions.contactSaveError = function (error) {
      alert("Error saving contact: " + error);
    };
  
    contact.save(saveOptions);
  }
  