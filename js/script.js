// JavaScript code to trigger contact card download
document.getElementById('download-btn').addEventListener('click', function() {
    var contactCardData = "BEGIN:VCARD\n" +
                          "VERSION:3.0\n" +
                          "N:Lastname;Firstname;;;\n" +
                          "FN:Your Name\n" +
                          "ORG:Your Company Name;\n" +
                          "TEL;TYPE=CELL:YOUR_PHONE_NUMBER\n" +
                          "EMAIL:YOUR_EMAIL_ADDRESS\n" +
                          "URL;type=linkedin:https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE\n" +
                          "URL;type=instagram:https://www.instagram.com/YOUR_INSTAGRAM_PROFILE\n" +
                          "END:VCARD";
  
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/vcard;charset=utf-8,' + encodeURIComponent(contactCardData));
    element.setAttribute('download', 'contact.vcf');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  });
  