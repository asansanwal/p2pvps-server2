/*
export default {
  session: 'secret-boilerplate-token',
  token: 'secret-jwt-token',
  database: 'mongodb://localhost:27017/p2pvps-server-dev'
}
*/

module.exports = {
  session: 'secret-boilerplate-token',
  token: 'secret-jwt-token',

  // Used for connecting to MongoDB in a Docker container.
  database: 'mongodb://165.140.84.23:3500/p2pvps-server-dev'
}
