'use strict'
const path = require('path')
const parser = require('xml2json')
const fs = require('node:fs')

function loadFile (req, res) {
  // console.log(req.files)
  // console.log(req.body.option)
  if (!req.files) return res.status(400).send({ message: 'No files were uploaded.', status: '400' })

  let fileXml = req.files.fileXml
  const option = req.body.option
  // console.log(req.body.option)

  if (option === 'alcalde') {
    fileXml.mv(path.resolve(__dirname, '../uploads/alcalde.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal upload file xml alcaldía' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'gobernador') {
    fileXml.mv(path.resolve(__dirname, '../uploads/gobernador.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal upload file xml gobernación' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'concejo') {
    fileXml.mv(path.resolve(__dirname, '../uploads/concejo.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal upload file xml concejo' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'asamblea') {
    fileXml.mv(path.resolve(__dirname, '../uploads/asamblea.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal upload file xml asamblea' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else {
    return res
      .status(200)
      .send({ message: 'No encontro una de las opciones para cargar el archivo.', status: '200' })
  }
}

function jsonAlcalde (_req, res) {
  fs.readFile(path.resolve(__dirname, '../uploads/alcalde.xml'), function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'algo salio mal read file xml alcalde' })
    }
    const json = parser.toJson(data, { object: true })
    // console.log('to json ->', json)
    const jsonCucuta = json.Consolidado.Boletin.filter(boletin => boletin.Municipio.V === '001' && boletin.Desc_Municipio.V === 'CUCUTA')
    return res.status(200).send({ status: '200', data: jsonCucuta[0] ?? {} })
  })
}

function jsonGobernador (_req, res) {
  fs.readFile(path.resolve(__dirname, '../uploads/gobernador.xml'), function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'algo salio mal read file xml gobernador' })
    }
    const json = parser.toJson(data, { object: true })
    // const jsonNorteSantander = json.Consolidado.Boletin.filter(boletin => {
    //   return boletin.Departamento.V === '2500'
    // })
    // console.log('to json ->', json)
    // console.log(jsonNorteSantander[0])
    const jsonNorteSantander = json.Consolidado.Boletin.filter(boletin => boletin.Municipio.V === '000' && boletin.Desc_Municipio.V === 'NO APLICA')
    return res.status(200).send({ status: '200', data: jsonNorteSantander[0] ?? {} })
  })
}

function jsonConcejo (_req, res) {
  fs.readFile(
    path.resolve(__dirname, '../uploads/concejo.xml'),
    function (err, data) {
      if (err) {
        return res.status(500).send({ status: '500', message: 'algo salio mal read file xml concejo' })
      }
      const json = parser.toJson(data, { object: true })
      // console.log('to json ->', json)
      const jsonCucuta = json.Consolidado.Boletin.filter(boletin => boletin.Municipio.V === '001' && boletin.Desc_Municipio.V === 'CUCUTA')
      return res.status(200).send({ status: '200', data: jsonCucuta[0] ?? {} })
    }
  )
}

function jsonAsamblea (_req, res) {
  fs.readFile(
    path.resolve(__dirname, '../uploads/asamblea.xml'),
    function (err, data) {
      if (err) {
        return res.status(500).send({ status: '500', message: 'algo salio mal read file xml asamblea' })
      }
      const json = parser.toJson(data, { object: true })
      // console.log('to json ->', json)
      const jsonNorteSantander = json.Consolidado.Boletin.filter(boletin => boletin.Municipio.V === '000' && boletin.Desc_Municipio.V === 'NO APLICA')
      return res.status(200).send({ status: '200', data: jsonNorteSantander[0] ?? {} })
    }
  )
}

module.exports = {
  loadFile,
  jsonGobernador,
  jsonAlcalde,
  jsonConcejo,
  jsonAsamblea
}
