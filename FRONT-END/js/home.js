'use strict'

import { apiCursos } from "./modulos/rotasAPI.js"

let api = apiCursos()

const showCursos = async(array) => {
    const cursos = await array
    const cardCursos = document.getElementById('card-cursos')

    for (let i = 0 ; i < cursos.length ; i ++) {

        let cardContainer = document.createElement('a')
        cardContainer.classList.add('card-container')
        cardContainer.id = `${cursos[i].sigla}`
        
        //cardContainer.addEventListener('click', changeScreen)

        // cardContainer.href = `studantPage.html?curso=${cursos[i].sigla}`
        cardContainer.href = `./FRONT-END/pages/studantPage.html?curso=${cursos[i].sigla}`

        let icon = document.createElement('img')
        icon.classList.add('vetor-curso')
        icon.src = cursos[i].icone

        let sigla = document.createElement('span')
        sigla.classList.add('sigla')
        sigla.innerHTML = `${cursos[i].nomeCurto}`

        cardContainer.appendChild(icon)
        cardContainer.appendChild(sigla)

        cardCursos.appendChild(cardContainer)
    }
}

showCursos(api)