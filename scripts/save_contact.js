function saveContact() {
  var contact = {
    displayName: "Dave Machario",
    phoneNumbers: [{ type: "mobile", value: "+85293457707" }],
    emails: [
      { type: "work", value: "dave.machario@sekologistics.com" },
      { type: "home", value: "davemachario@gmail.com" }
    ]
  };

  if (typeof navigator.contacts !== "undefined" && typeof navigator.contacts.save === "function") {
    navigator.contacts.save(contact, onSaveSuccess, onSaveError);
  } else {
    alert("Contact save functionality is not supported on this device.");
  }
}

function onSaveSuccess(contact) {
  alert("Contact saved successfully!");
}

function onSaveError(error) {
  alert("Contact save failed: " + error);
}
