// run `node index.js` in the terminal
var http = require('http');
var fs = require('fs');
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

http
  .createServer((req, res) => {
    res.write('Hello World!!');
    res.end();
  })
  .listen(4040, () => console.log('server is running....'));
fs.appendFile('test.txt', 'The AppendFile', (err, data) => {
  console.log('hello world', data, err);
});
