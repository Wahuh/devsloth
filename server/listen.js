const ioServer = require('./io-server');
const {port} = require('./config');

ioServer.listen(port, () => {
  process.stdout.write('listening on port');
});
