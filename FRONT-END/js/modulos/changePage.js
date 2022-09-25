'use strict'

import { apiAlunosCurso } from "./rotasAPI.js"

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

function changeScreen(evento) {
    const home = document.getElementById('home')
    home.style.display = "none"
    const textExit = document.querySelector('.textExit')
    textExit.textContent = "Voltar"

    infoCards(apiAlunosCurso(evento.target.id))
    console.log(evento.target.id)
}

export {
    changeScreen
}