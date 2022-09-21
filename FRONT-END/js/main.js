'use strict'

import { usandoAPI } from "./modulos/APIcurso.js"

console.log(usandoAPI())

let api = usandoAPI()

const showCursos = async(array) => {
    const cursos = await array
    const cardCursos = document.getElementById('card-cursos')

    for (let i = 0 ; i < cursos.length ; i ++) {
        let cardContainer = document.createElement('button')
        cardContainer.classList.add('card-container')

        let icon = document.createElement('img')
        icon.classList.add('vetor-curso')
        icon.src = cursos[i].icone

        let sigla = document.createElement('span')
        sigla.classList.add('sigla')
        sigla.innerHTML = `${cursos[i].sigla}`

        cardContainer.appendChild(icon)
        cardContainer.appendChild(sigla)

        cardCursos.appendChild(cardContainer)
    }

}


showCursos(api)