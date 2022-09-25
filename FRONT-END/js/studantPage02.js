'use strict'

import { apiAlunosCurso } from "./modulos/rotasAPI.js"

const infoCards = async(array) => {
    const alunos = await array
    const main = document.getElementById('main')

    for (let i = 0; i < alunos.length; i++) {
        const cardPerson = document.createElement('button')
        cardPerson.classList.add('card-person')

        const nome = document.createElement('span')
        nome.classList.add('nome-studant')
        nome.textContent = `${alunos[i].nome}`

        const icone = document.createElement('img')
        icone.classList.add('icone')
        icone.src = `${alunos[i].icone}`

        cardPerson.appendChild(nome)
        cardPerson.appendChild(icone)

        main.appendChild(cardPerson)
    }
}

const changeScreen = (event) => {
    // const home = getElementById('home')
    // home.style.display = 'none';
    
    infoCards(apiAlunosCurso(event.target.id))

    
}

export {
    changeScreen
}