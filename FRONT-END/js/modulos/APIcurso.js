'use strict'

const usandoAPI = async() => {
    const urlAPIcursos = 'http://localhost:3030/cursos'

    const response = await fetch(urlAPIcursos)
    const listaCursos = await response.json()

    return listaCursos
}

export {
    usandoAPI
}
