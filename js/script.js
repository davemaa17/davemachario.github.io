function showContact() {
  var vCardContent = "BEGIN:VCARD\r\n" +
                     "VERSION:3.0\r\n" +
                     "N:Machario;Dave\r\n" +
                     "FN:Dave Machario\r\n" +
                     "ORG:Kroma Works\r\n" +
                     "TITLE:Data Analyst, Freelance Music Producer\r\n" +
                     "TEL;TYPE=CELL:(+852) 5422-5672\r\n" +
                     "EMAIL;TYPE=WORK,INTERNET:business@kroma.works\r\n" +
                     "EMAIL;TYPE=HOME,INTERNET:davemachario@gmail.com\r\n" +
                     "URL;TYPE=LINKEDIN:https://www.linkedin.com/in/davemachario\r\n" +
                     "URL;TYPE=INSTAGRAM:https://www.instagram.com/kroma.works\r\n" +
                     "URL;TYPE=YOUTUBE:https://www.youtube.com/@island_productions\r\n" +
                     "END:VCARD";

  var vCardBlob = new Blob([vCardContent], { type: "text/vcard" });
  var vCardURL = URL.createObjectURL(vCardBlob);

  var newWindow = window.open(vCardURL, '_blank');
  if (newWindow) {
    newWindow.focus();
  } else {
    alert("Please allow pop-ups to show the vCard.");
  }
}
