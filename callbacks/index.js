const fs = require("fs")
function human(name, callbackFn){
    console.log("Hello "+name)
    callbackFn()
}
function address(){
    console.log("Spain")
}
human("Salma Paralluelo", address)

fs.readFile("index.txt", 'utf-8', (err, data) => {
    if (err){
        console.error("Error message",err)
    }
    console.log(data)
});