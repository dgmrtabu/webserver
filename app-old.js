const http = require('http');

http.createServer((req, res) => {

        //res.writeHead(200, { 'Content-Type': 'application/json' });
        res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
        res.writeHead(200, { 'Content-Type': 'application/csv' });

        res.write('id,nombre\n');
        res.write('1,David\n');
        res.write('2,Vanesa\n');
        res.write('3,Miya\n');
        res.write('4,Wara\n');
        res.end();
    })
    .listen(8080);

console.log('Escuchando en el puerto', 8080);