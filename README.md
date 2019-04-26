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
- pdf-parse
