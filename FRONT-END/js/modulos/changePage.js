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
// const changeScreenDS = (filtro) => { 
function changeScreen(filtro) {
    const curso = filtro
    const home = document.getElementById('home')
    home.style.display = "none"

    // console.log(curso)
    infoCards(apiAlunosCurso('ds'))
    // infoCards(apiAlunosCurso(curso))
}

export {
    changeScreen
}