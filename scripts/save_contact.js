function downloadVCard() {
  const vcardData = `
    BEGIN:VCARD
    VERSION:3.0
    FN:Dave Machario
    EMAIL:davemachario@gmail.com
    TEL;TYPE=CELL:(+852) 9345-7707
    ORG:SEKO Logistics, Island Productions
    TITLE:Data Analyst, Freelance Audio Editor
    URL:https://www.linkedin.com/in/davemachario/
    URL:https://www.instagram.com/islandproductions.id
    URL:https://www.youtube.com/channel/UCInemueXqh0N622jrIGtmVQ
    END:VCARD
  `;

  const blob = new Blob([vcardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'contact.vcf';
  link.click();

  URL.revokeObjectURL(url);
}
