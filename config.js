'use strict'

// require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3002,
  db: 'mongodb://127.0.0.1:27017/elecciones',
  dbDocker: 'mongodb://root:123456@192.168.99.100:27017/elecciones',
  dbProd:
    'mongodb://' +
    process.env.DB_USER +
    ':' +
    process.env.DB_PASS +
    '@' +
    process.env.DB_HOST +
    '/elecciones',
  SECRET_TOKEN: process.env.JWT || 'my-key-secrete'
}
