'use strict'
const path = require('path')
const fs = require('fs')

function partidos (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'partidos-politicos.json'), (err, data) => {
    if (err) throw err
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosSenado (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'candidatos-senado.json'), (err, data) => {
    if (err) throw err
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosPactoHistorico (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'candidatos-pacto-historico.json'), (err, data) => {
    if (err) throw err
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

function candidatosCentroEsperanza (req, res) {
  // console.log(path.resolve(__dirname, 'partidos-politicos.json'))
  fs.readFile(path.resolve(__dirname, 'candidatos-centro-esperanza.json'), (err, data) => {
    if (err) throw err
    let listPartidos = JSON.parse(data)
    // console.log(listPartidos)
    return res.status(200).send({ status: '200', data: listPartidos })
  })
}

module.exports = {
  partidos,
  candidatosSenado,
  candidatosPactoHistorico,
  candidatosCentroEsperanza
}
