//const fileSystem = require("fs/promises");

//onst fileLesson = async() =>{
// create a file
 //await   fileSystem.writeFile("test.txt","hello devs");

 // read from a file
 //const contents = await fileSystem.readFile("test.txt","utf8");
 //console.log(contents)

 //delete a file
 //await fileSystem.unlink("test.txt");

 // update/append a file
 //await fileSystem.appendFile("text.txt", "this file is appended");

 //create a folder
 //await fileSystem.mkdir("test")

 //delete a folder
 //await fileSystem.rmdir("test")
//};
//fileLesson();


// creating a simple server 

const http = require("http");

http.createServer((request,response) =>{
    response.end("hello devs ,this is a server");
}).listen(5000);