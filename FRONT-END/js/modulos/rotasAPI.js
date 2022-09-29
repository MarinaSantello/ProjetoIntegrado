'use strict'

const apiCursos = async() => {
    const urlAPIcursos = 'http://localhost:3030/cursos'

    const response = await fetch(urlAPIcursos)
    const listaCursos = await response.json()

    return listaCursos
}

const apiAlunosCurso = async(filtro) => {
    const sigla = filtro
    const urlAPIalunosCurso = `http://localhost:3030/alunos/?filtroSigla=${sigla}`

    const response = await fetch(urlAPIalunosCurso)
    const listaAlunosCurso = await response.json()

    return listaAlunosCurso
}

const apiAlunos = async(filtroSigla, anoConclusao,filtroStatus) => {
    const sigla = filtroSigla.toUpperCase()
    const ano = anoConclusao
    const status = filtroStatus.toUpperCase()
    const urlAPIalunos = `http://localhost:3030/alunosGeral/?filtroSigla=${sigla}&anoConclusao=${ano}&filtroStatus=${status}`

    const response = await fetch(urlAPIalunos)
    const listaAlunos = await response.json()

    return listaAlunos
}

const apiAlunosCursoStatus = async(filtroSigla, filtroStatus) => {
    const sigla = filtroSigla.toUpperCase()
    const status = filtroStatus
    const urlAPIalunosCursoStatus = `http://localhost:3030/alunosCursoStatus/?filtroSigla=${sigla}&filtroStatus=${status}`

    const response = await fetch(urlAPIalunosCursoStatus)
    const listaAlunosCursoStatus = await response.json()

    return listaAlunosCursoStatus
}

const apiAlunosCursoConclusao = async(filtroSigla, anoConclusao) => {
    const sigla = filtroSigla.toUpperCase()
    const ano = anoConclusao
    const urlAPIalunosCursoConclusao = `http://localhost:3030/alunosConclusao/?filtroAno=${ano}&filtroCurso=${sigla}`

    const response = await fetch(urlAPIalunosCursoConclusao)
    const listaAlunosCursoConclusao = await response.json()

    return listaAlunosCursoConclusao
}

const apiDiciplinasAluno = async(filtro) => {
    const matricula = filtro
    const urlAPIdiciplinasAlunos = `http://localhost:3030/diciplinaAluno?filtro=${matricula}`

    const response = await fetch(urlAPIdiciplinasAlunos)
    const listaDiciplinasAluno = await response.json()

    return listaDiciplinasAluno
}

export {
    apiCursos,
    apiAlunosCurso,
    apiAlunos,
    apiAlunosCursoConclusao,
    apiAlunosCursoStatus,
    apiDiciplinasAluno
}
