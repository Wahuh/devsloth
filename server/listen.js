const ioServer = require('./io-server');

ioServer.listen(3000, () => {
  process.stdout.write('listening on port 3000');
});
