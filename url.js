const url = require('url');

const address = 'http://localhost:8080/default.html?year=2023&month=january';

const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.query.month);