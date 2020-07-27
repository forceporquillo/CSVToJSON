const CSVToJson = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

CSVToJson().fromFile("./source.csv").then(source => {
    console.log(source);
    source.push({
        "sku": "56789",
        "title": "Fortnite",
        "hardware": "Nintendo Switch",
        "price": "00.00"
    });

    const csv = JSONToCSV(source, { fields: ["sku", "title", "hardware", "price"]})

    FileSystem.writeFileSync("./destination.csv", csv)
})