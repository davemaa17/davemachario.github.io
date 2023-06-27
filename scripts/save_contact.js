function saveContact() {
  const contact = {
    name: "Dave Machario",
    email: "davemachario@gmail.com",
    companyEmail: "dave.machario@sekologistics.com",
    phone: "+85293457707"
  };

  if (navigator.contacts) {
    // For mobile devices with contact support
    const contactObject = navigator.contacts.create(contact);
    contactObject.save();
  } else {
    // For other devices or browsers
    const contactVCard = [
      `BEGIN:VCARD`,
      `VERSION:3.0`,
      `N:${contact.name}`,
      `EMAIL;TYPE=INTERNET:${contact.email}`,
      `EMAIL;TYPE=WORK:${contact.companyEmail}`,
      `TEL;TYPE=CELL:${contact.phone}`,
      `END:VCARD`
    ].join("\n");

    const encodedVCard = encodeURIComponent(contactVCard);
    const dataUri = `data:text/vcard;charset=utf-8,${encodedVCard}`;

    const link = document.createElement("a");
    link.href = dataUri;
    link.setAttribute("download", `${contact.name}.vcf`);
    link.click();
  }
}
