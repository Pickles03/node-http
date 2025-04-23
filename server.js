const http = require('node:http');

const {webPageData} = require('./data.js');

const server = http.createServer((req, res) => {
    res.end(`
        <h1>${webPageData.title}</h1>
        <h2>${webPageData.subtitle}</h2>
        <p>${webPageData.description}</p>
        <p>${webPageData.keywords}</p>
        `);
});

server.listen(0, () => {
    console.log(`Server is listening on port: http://localhost:${server.address().port}`);
})


