// import the http module
const http = require('http');

// initialize a new server
// The writeHead method sends meta data allowing the browser to identify the type of content
// being sent 
const server = http.createServer((req,res)=>{
    if (req.url == '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end(`<h1> welcome to node js</h1>`)
    }
    res.end(`<h1>OOPS !!! PAGE NOT FOUND</h1>
    <a href="/">return home</a>`)
})

// run the server on port 8080
server.listen(8080,()=>{
    console.log('server listening.............')
})