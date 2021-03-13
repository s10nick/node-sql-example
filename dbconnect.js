const options = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'twitap'
  }
}
const db = require('knex')(options)

export default db