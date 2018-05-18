'use strict'

module.exports = {
  port: process.env.PORT || 8080,
  db: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/elecciones',
  SECRET_TOKEN: process.env.JWT || 'my-key-secrete'
}
