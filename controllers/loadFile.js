'use strict'
const path = require('path')
const parser = require('xml2json')
const fs = require('fs')

function loadFile (req, res) {
  // console.log(req.files)
  // console.log(req.body.option)
  if (!req.files) return res.status(400).send('No files were uploaded.')

  let fileXml = req.files.fileXml

  if (req.body.option === 'Departamental') {
    fileXml.mv(path.resolve(__dirname, '../uploads/fileDepartamental.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'File uploaded!', status: '200' })
    })
  } else {
    fileXml.mv(path.resolve(__dirname, '../uploads/fileNacional.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'File uploaded!', status: '200' })
    })
  }
}
/* eslint handle-callback-err: 2 */

function jsonDepartamental (req, res) {
  fs.readFile('../uploads/fileDepartamental', function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'alo salio mal' })
    }
    const json = parser.toJson(data)
    console.log('to json ->', json)
  })

  return res.status(200).send({ status: '200' })
}

module.exports = {
  loadFile,
  jsonDepartamental
}
