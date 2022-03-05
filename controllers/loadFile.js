'use strict'
const path = require('path')
const parser = require('xml2json')
const fs = require('fs')

function loadFile (req, res) {
  // console.log(req.files)
  // console.log(req.body.option)
  if (!req.files) return res.status(400).send({ message: 'No files were uploaded.', status: '400' })

  let fileXml = req.files.fileXml
  const option = req.body.option
  // console.log(req.body.option)

  if (option === 'senado_nacional') {
    fileXml.mv(path.resolve(__dirname, '../uploads/senado_nacional.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'camara_departamental') {
    fileXml.mv(path.resolve(__dirname, '../uploads/camara_departamental.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'centro_esperanza') {
    fileXml.mv(path.resolve(__dirname, '../uploads/centro_esperanza.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'pacto_historico') {
    fileXml.mv(path.resolve(__dirname, '../uploads/pacto_historico.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else if (option === 'equipo_colombia') {
    fileXml.mv(path.resolve(__dirname, '../uploads/equipo_colombia.xml'), function (err) {
      if (err) return res.status(500).send({ message: 'Algo salio mal ' + err, status: '500' })

      return res.status(200).send({ message: 'Se cargo el archivo correctamente.', status: '200' })
    })
  } else {
    return res
      .status(200)
      .send({ message: 'No encontro una de las opciones para cargar el archivo.', status: '200' })
  }
}

function jsonSenadoNacional (req, res) {
  fs.readFile(path.resolve(__dirname, '../uploads/senado_nacional.xml'), function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'algo salio mal senado_nacional' })
    }
    const json = parser.toJson(data, { object: true })
    // console.log('to json ->', json)
    return res.status(200).send({ status: '200', data: json.Consolidado.Boletin })
  })
}

function jsonCamaraDepartamental (req, res) {
  fs.readFile(path.resolve(__dirname, '../uploads/camara_departamental.xml'), function (err, data) {
    if (err) {
      return res.status(500).send({ status: '500', message: 'algo salio mal camara_departamental' })
    }
    const json = parser.toJson(data, { object: true })
    const jsonNorteSantander = json.Consolidado.Boletin.filter(boletin => {
      return boletin.Departamento.V === '2500'
    })
    // console.log('to json ->', json)
    // console.log(jsonNorteSantander[0])
    return res.status(200).send({ status: '200', data: jsonNorteSantander[0] })
  })
}

function jsonCentroEsperanza (req, res) {
  fs.readFile(
    path.resolve(__dirname, '../uploads/centro_esperanza.xml'),
    function (err, data) {
      if (err) {
        return res.status(500).send({ status: '500', message: 'algo salio mal centro_esperanza' })
      }
      const json = parser.toJson(data, { object: true })
      // console.log('to json ->', json)
      return res.status(200).send({ status: '200', data: json.Consolidado.Boletin })
    }
  )
}

function jsonPactoHistorico (req, res) {
  fs.readFile(
    path.resolve(__dirname, '../uploads/pacto_historico.xml'),
    function (err, data) {
      if (err) {
        return res.status(500).send({ status: '500', message: 'algo salio mal pacto_historico' })
      }
      const json = parser.toJson(data, { object: true })
      // console.log('to json ->', json)
      return res.status(200).send({ status: '200', data: json.Consolidado.Boletin })
    }
  )
}

function jsonEquipoColombia (req, res) {
  fs.readFile(
    path.resolve(__dirname, '../uploads/equipo_colombia.xml'),
    function (err, data) {
      if (err) {
        return res.status(500).send({ status: '500', message: 'algo salio mal equipo_colombia' })
      }
      const json = parser.toJson(data, { object: true })
      // console.log('to json ->', json)
      return res.status(200).send({ status: '200', data: json.Consolidado.Boletin })
    }
  )
}

module.exports = {
  loadFile,
  jsonCamaraDepartamental,
  jsonSenadoNacional,
  jsonCentroEsperanza,
  jsonPactoHistorico,
  jsonEquipoColombia
}
