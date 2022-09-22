'use strict'

import { apiAlunosCurso, apiAlunosCursoStatus } from "./rotasAPI.js"

const infoCardsCurso = async(array) => {
    const alunos = await array
    const main = document.getElementById('main')

    for (let i = 0; i < alunos.length; i++) {
        const cardPerson = document.createElement('div')
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

// const statusStudant = async(array, statusPesquisa) => {
//     const alunos = await array
//     const status = await statusPesquisa
//     const value = getComputedStyle(document.documentElement).getPropertyValue('--statusF-color')

//     alunos.forEach(element => {
//         if(element.status.includes(status)) {
//             document.querySelector('.nome-studant').style.color = value
//         }
//     });
// }

// infoCards(apiAlunosCurso('rdc'))

export {
    infoCardsCurso
}
