const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == '/'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('<h1>Hello World from me</h1>');
    }
    else if (url == '/about'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('<h1>This is about page</h1>');
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('<h1>Page not found</h1>');
    }

});

const port = 3000;
server.listen(port, () => {
    console.log("Server running at http://localhost:" + port);
});
