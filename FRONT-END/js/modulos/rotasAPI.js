'use strict'

const apiCursos = async() => {
    const urlAPIcursos = 'http://localhost:3030/cursos'

    const response = await fetch(urlAPIcursos)
    const listaCursos = await response.json()

    return listaCursos
}

const apiAlunosCurso = async(filtro) => {
    const sigla = filtro
    const urlAPIalunosCurso = `http://localhost:3030/alunos/?filtro=${sigla}`

    const response = await fetch(urlAPIalunosCurso)
    const listaAlunosCurso = await response.json()

    return listaAlunosCurso
}



export {
    apiCursos,
    apiAlunosCurso
}
