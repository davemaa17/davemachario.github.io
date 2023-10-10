function saveContact() {
  var vcardData = "BEGIN:VCARD\n" +
    "VERSION:3.0\n" +
    "N:Machario;Dave\n" +
    "FN:Dave Machario\n" +
    "ORG:Kroma Works\n" +
    "TITLE:Data Analyst, Freelance Music Producer\n" +
    "TEL;TYPE=CELL:(+852) 5422-5672\n" +
    "EMAIL:davemachario@gmail.com\n" +
    "EMAIL;TYPE=WORK:business@kroma.works\n" +
    "END:VCARD";

  var encodedData = encodeURIComponent(vcardData);
  var downloadLink = document.createElement("a");
  downloadLink.setAttribute("href", "data:text/vcard;charset=utf-8," + encodedData);
  downloadLink.setAttribute("download", "Dave_Machario.vcf");
  downloadLink.click();
}
