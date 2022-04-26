# crypto-parser
Extract Bitcoin historical information from the Bitcoin CSV into code to be used elsewhere

2

You can take the file path as command line argument when running your nodejs app like

    node crypto-parser.js pathToCsvFile

Now you'll have to get this path in your code as

    var filePath = process.argv[2];

Now you can use this path to read your file as

   fs.readFile(filePath, (err, data) => {
     if (err) throw err;
    console.log(data);
    console.log("path/to/file.csv could not be found. Please check your file location and try again.")
 });
