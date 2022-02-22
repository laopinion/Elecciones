'use strict'
const path = require('path')
const parser = require('xml2json')
const fs = require('fs')

function loadFile(req, res) {
  // console.log(req.files)
  // console.log(req.body.option)
  if (!req.files) return res.status(400).send({ message: 'No files were uploaded.', status: '400' })

  let fileXml = req.files.fileXml
  const option = req.body.option
  // console.log(req.body.option)

  if (option === 'Alcaldia') {
    fileXml.mv(path.resolve(__dirname, '../uploads/fileAlcaldia.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'Gobernacion') {
    fileXml.mv(path.resolve(__dirname, '../uploads/fileGobernacion.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'Asamblea') {
    fileXml.mv(path.resolve(__dirname, '../uploads/fileAsamblea.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'Concejo') {
    fileXml.mv(path.resolve(__dirname, '../uploads/fileConcejo.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'departamentalTest') {
    fileXml.mv(path.resolve(__dirname, '../uploads/fileDepartamentalTest.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else {
    return res
      .status(200)
      .send({ message: 'No encontro una de las opciones para cargar el archivo.', status: '200' })
  }
}

function jsonAlcaldiaHttp(req, res) {
  fs.readFile(path.resolve(__dirname, '../uploads/fileAlcaldia.xml'), function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'algo salio mal' })
    }
    const json = parser.toJson(data, { object: true })
    // console.log('to json ->', json)
    return res.status(200).send({ status: '200', data: json })
  })
}

function jsonGobernacionHttp(req, res) {
  fs.readFile(path.resolve(__dirname, '../uploads/fileGobernacion.xml'), function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'algo salio mal' })
    }
    const json = parser.toJson(data, { object: true })
    // console.log('to json ->', json)
    return res.status(200).send({ status: '200', data: json })
  })
}

function jsonAsambleaHttp(req, res) {
  fs.readFile(path.resolve(__dirname, '../uploads/fileAsamblea.xml'), function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'algo salio mal' })
    }
    const json = parser.toJson(data, { object: true })
    // console.log('to json ->', json)
    return res.status(200).send({ status: '200', data: json })
  })
}

function jsonConcejoHttp(req, res) {
  fs.readFile(path.resolve(__dirname, '../uploads/fileConcejo.xml'), function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'algo salio mal' })
    }
    const json = parser.toJson(data, { object: true })
    // console.log('to json ->', json)
    return res.status(200).send({ status: '200', data: json })
  })
}

function jsonDepartamentalHttp(req, res) {
  fs.readFile(
    path.resolve(__dirname, '../uploads/fileDepartamentalTest.xml'),
    function (err, data) {
      if (err) {
        return res.status(500).send({ status: '500', message: 'algo salio mal departamental' })
      }
      const json = parser.toJson(data, { object: true })
      // console.log('to json ->', json)
      return res.status(200).send({ status: '200', data: json })
    }
  )
}

module.exports = {
  loadFile,
  jsonAlcaldiaHttp,
  jsonGobernacionHttp,
  jsonAsambleaHttp,
  jsonConcejoHttp,
  jsonDepartamentalHttp,
}
