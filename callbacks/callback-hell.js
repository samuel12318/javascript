const fs = require('fs');

fs.readFile("index.txt", 'utf-8', (err, data) => {
    if (err){
        console.error("Error message",err)
    }
    const modifyFileDate = data.toUpperCase();
    fs.writeFile("index.txt", modifyFileDate, (err) => {
        if (err){
            console.error("Error message",err)
        }
    });

});