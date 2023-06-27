function saveContact() {
  var vcardData = "BEGIN:VCARD\n" +
    "VERSION:3.0\n" +
    "N:Machario;Dave\n" +
    "FN:Dave Machario\n" +
    "ORG:SEKO Logistics\n" +
    "TITLE:Data Analyst, Music Producer\n" +
    "TEL;TYPE=CELL:(+852) 9345-7707\n" +
    "EMAIL:davemachario@gmail.com\n" +
    "EMAIL;TYPE=WORK:dave.machario@sekologistics.com\n" +
    "END:VCARD";

  var encodedData = encodeURIComponent(vcardData);
  var downloadLink = document.createElement("a");
  downloadLink.setAttribute("href", "data:text/vcard;charset=utf-8," + encodedData);
  downloadLink.setAttribute("download", "Dave_Machario.vcf");
  downloadLink.click();
}
