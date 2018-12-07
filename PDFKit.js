const PDFDocument = require('pdfkit');
const catFacts = require('cat-facts');
const fs = require('fs');

let randomFact = catFacts.random();

doc = new PDFDocument 
doc.pipe (fs.createWriteStream('./cat-fact.pdf'));
doc.fontSize(25)
   .text(randomFact, 100, 100)
   
doc.end();