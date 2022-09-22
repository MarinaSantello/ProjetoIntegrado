'use strict'

import { apiCursos } from "./modulos/rotasAPI.js"

import { changeScreen } from "./modulos/changePage.js"

let api = apiCursos()

const showCursos = async(array) => {
    const cursos = await array
    const cardCursos = document.getElementById('card-cursos')

    for (let i = 0 ; i < cursos.length ; i ++) {
        // cardCursos.innerHTML = `
        //     <button class="card-container" id="card-container${i}" onclick="${changeScreen(cursos[i].sigla)}">
        //         ${cursos[i].sigla}
        //     </button>
        // `
        console.log(i)

        let cardContainer = document.createElement('button')
        cardContainer.classList.add('card-container')
        cardContainer.id = `card-container${i}`

        // cardContainer.addEventListener('click', changeScreen`${cursos[i].sigla}`)

        let icon = document.createElement('img')
        icon.classList.add('vetor-curso')
        icon.src = cursos[i].icone

        let sigla = document.createElement('span')
        sigla.classList.add('sigla')
        sigla.innerHTML = `${cursos[i].sigla}`

        cardContainer.appendChild(icon)
        cardContainer.appendChild(sigla)

        cardCursos.appendChild(cardContainer)

        // cardContainer.addEventListener('click', e_teste('xxx'))
        // console.log(cardContainer.id);
        // document.getElementById(cardContainer.id).onclick = `${e_teste('xxx')}`;
    }

}

showCursos(api)