'use strict'

// require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3002,
  db:
    'mongodb://' +
    process.env.DB_USER_SANDBOX +
    ':' +
    process.env.DB_PASS_SANDBOX +
    '@ds217208.mlab.com:17208/elecciones',
  dbDocker: 'mongodb://root:123456@192.168.99.100:27017/elecciones',
  dbProd:
    'mongodb://' +
    // 'mongodb+srv://' +
    process.env.DB_USER +
    ':' +
    process.env.DB_PASS +
    '@' +
    process.env.DB_HOST +
    '/elecciones_db',
  // '/laopinion',
  SECRET_TOKEN: process.env.JWT || 'my-key-secrete',
}
