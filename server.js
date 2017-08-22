const Hapi = require('hapi');
const Blipp = require('blipp');

const routes = require('./routes');
const server = new Hapi.Server();

server.connection({ port: 9000 });
server.register([
  { register: Blipp, showAuth: true }  
], (err) => {
  if (err) {
    throw err;
  }

  server.route(routes);
  server.start(() => {});
});