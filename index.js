const fs = require('fs');
const pdf = require('pdf-parse');
const hash = require('sha256')

let dataBuffer = fs.readFileSync('./sample.pdf');

console.log("Hash of Whole PDF Document: ", hash(dataBuffer) + "\n");

pdf(dataBuffer).then(function(pdf_data) {
    console.log("Number of pages in the PDF:",pdf_data.numpages + "\n");
    console.log("Number of rendered pages:",pdf_data.numrender + "\n");
    console.log("Information about the PDF:",pdf_data.info + "\n");
    console.log("Metadata of PDF:",pdf_data.metadata + "\n"); 
    console.log("Version of PDF",pdf_data.version + "\n");
    console.log("PDF 's Text Content:",pdf_data.text + "\n");
});