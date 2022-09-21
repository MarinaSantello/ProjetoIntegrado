const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const { getCursos } = require('./modulos/cursos')
const { getAlunosCurso, getAlunosAno, getDiciplinaAluno } = require('./modulos/funAlunos')
const { response, request } = require('express')

app.use((request, response, next) => {
    response.header(`Access-Control-Allow-Origin`, `*`)
    response.header(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`)
    app.use(cors())
    next()
})

app.get('/cursos', cors(), async(request, response, next) => {
    let cursos = getCursos()

    if (cursos == null) {
        response.status(404)
    }
    else {
        response.status(200)
        response.json(cursos)
    }
})

app.get('/alunos/', cors(), async(request, response, next) => {
    const sigla = request.query.filtro
    let alunos = getAlunosCurso(sigla)

    if (alunos == null) {
        response.status(404)
    }
    else {
        response.status(200)
        response.json(alunos)
    }
})

app.get('/alunosConclusao/', cors(), async(request, response, next) => {
    const ano = request.query.filtro
    let alunos = getAlunosAno(ano)

    if (alunos == null) {
        response.status(404)
    }
    else {
        response.status(200)
        response.json(alunos)
    }
})

app.get('/diciplinaAluno', cors(), async(request, response, next) => {
    let matricula = request.query.filtro
    let informacoes = getDiciplinaAluno(matricula)

    if (informacoes == null) {
        response.status(404)
    }
    else {
        response.status(200)
        response.json(informacoes)
    }
})

// app.get('/cursos/:filtro', cors(), async(request, response, next) => {
//     let sigla = request.params.filtro
//     let cursos = getCursos(sigla)

//     if (cursos == null) {
//         response.status(404)
//     }
//     else {
//         response.status(200)
//         response.json(cursos)
//     }
// })

app.listen(3030, () => {
    console.log('Server waiting requisitions')
})