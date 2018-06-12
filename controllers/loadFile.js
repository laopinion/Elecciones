'use strict'
const path = require('path')
const parser = require('xml2json')
const fs = require('fs')

function loadFile (req, res) {
  // console.log(req.files)
  // console.log(req.body.option)
  if (!req.files) return res.status(400).send({ message: 'No files were uploaded.', status: '400' })

  let fileXml = req.files.fileXml

  if (req.body.option === 'Departamental') {
    fileXml.mv(path.resolve(__dirname, '../uploads/fileDepartamental.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else {
    fileXml.mv(path.resolve(__dirname, '../uploads/fileNacional.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  }
}

function jsonDepartamentalHttp (req, res) {
  fs.readFile(path.resolve(__dirname, '../uploads/fileDepartamental.xml'), function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'algo salio mal' })
    }
    const json = parser.toJson(data, { object: true })
    // console.log('to json ->', json)
    return res.status(200).send({ status: '200', data: json })
  })
}

function jsonNacionalHttp (req, res) {
  fs.readFile(path.resolve(__dirname, '../uploads/fileNacional.xml'), function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'algo salio mal' })
    }
    const json = parser.toJson(data, { object: true })
    // console.log('to json ->', json)
    return res.status(200).send({ status: '200', data: json })
  })
}

function jsonDepartamental () {
  return new Promise(function (resolve, reject) {
    fs.readFile(path.resolve(__dirname, '../uploads/fileDepartamental.xml'), function (err, data) {
      if (err) {
        // return res.status(500).send({ status: '500', message: 'algo salio mal' })
        return reject(err)
      }
      const json = parser.toJson(data, { object: true })
      // console.log('to json ->', json)
      // return res.status(200).send({ status: '200', data: json })
      return resolve(json)
    })
  })
}

function jsonNacional () {
  return new Promise(function (resolve, reject) {
    fs.readFile(path.resolve(__dirname, '../uploads/fileNacional.xml'), function (err, data) {
      if (err) {
        // return res.status(500).send({ status: '500', message: 'algo salio mal' })
        return reject(err)
      }
      const json = parser.toJson(data, { object: true })
      // console.log('to json ->', json)
      // return res.status(200).send({ status: '200', data: json })
      return resolve(json)
    })
  })
}

module.exports = {
  loadFile,
  jsonDepartamental,
  jsonNacional,
  jsonDepartamentalHttp,
  jsonNacionalHttp
}
