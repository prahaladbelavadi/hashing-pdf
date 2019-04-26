# hashing-pdf
Hashing a binary file; demo


## Learning:
- PDF is a binary file.
- Content of the PDF file can be extracted and hashed exclusively or the the file as a whole
- Hash functions normally are operated as buffers.


Since the PDF is a binary file, when fs module loads the pdf file, it stores it as a buffer in memory.
The buffer of the file can directly be operated on.

There are options where PDFs can be created with JSON using Pdfjs and other options.

At the end of the day, hashing the document by importing it as a binary is a better alternative instead of parsing contents since there is a chance where it can be manipulated as a result of dependency injected vuln.

References:
- https://www.npmjs.com/package/pdf2json
- https://www.npmjs.com/package/pdf-parse
- https://github.com/adrienjoly/npm-pdfreader
- https://github.com/mozilla/pdf.js/
- https://github.com/adrienjoly/npm-pdfreader
- https://stackoverflow.com/questions/8305988/convert-binary-tostringencode64-back-to-binary
- https://nodejs.org/api/crypto.html
- https://www.npmjs.com/package/sha256
- https://www.npmjs.com/package/pdf-stream
- https://github.com/foliojs/pdfkit
- http://pdfkit.org/
- https://github.com/bpampuch/pdfmake
- https://medium.com/@kainikhil/nodejs-how-to-generate-and-properly-serve-pdf-6835737d118e
