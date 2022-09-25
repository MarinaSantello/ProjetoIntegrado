'use strict'

import { apiCursos, apiAlunosCurso, apiAlunosCursoStatus } from "./modulos/rotasAPI.js"

let xParametro01 = window.location.search.substring(1);
let sigla01 = xParametro01.split('=')[1]

const name = async(array, sigla) => {
    const cursos = await array
    const siglaCurso = sigla

    const titulo = document.getElementsByClassName('titulo')
    const h1 = document.createElement('h1')

    cursos.forEach(element => {
        if(element.sigla.includes(siglaCurso)) {
            h1.textContent = element.nome
            console.log(element.nome)
        }
    });

    main.appendChild(h1)

}

const infoCards = async(array) => {
    const alunos = await array
    const main = document.getElementById('main')

    await name(apiCursos(), sigla01)


    for (let i = 0; i < alunos.length; i++) {
        const cardPerson = document.createElement('a')
        cardPerson.classList.add('card-person')

        cardPerson.href = `aluno.html?matricula=${alunos[i].matricula}`

        const nome = document.createElement('span')
        nome.classList.add('nome-studant')
        nome.textContent = `${alunos[i].nome}`

        const icone = document.createElement('img')
        icone.classList.add('icone')
        icone.src = `${alunos[i].icone}`

        cardPerson.appendChild(nome)
        cardPerson.appendChild(icone)

        main.appendChild(cardPerson)

        const colorCursando = getComputedStyle(document.documentElement).getPropertyValue('--statusC-color')
        const colorFinalizado = getComputedStyle(document.documentElement).getPropertyValue('--statusF-color')
        
        if (alunos[i].status == 'Cursando') {
            cardPerson.style.backgroundColor = colorCursando
        } 
        else {
            cardPerson.style.backgroundColor = colorFinalizado
        }
        
    }

    console.log(3)
    console.log(main)


}

const createCards = () => {
    let xParametro = window.location.search.substring(1);
    let sigla = xParametro.split('=')[1]

    infoCards(apiAlunosCurso(sigla))
}

const createCardsStatus = (status) => {
    let xParametro = window.location.search.substring(1);
    let sigla = xParametro.split('=')[1]

    infoCards(apiAlunosCursoStatus(sigla, status))
}

const cases = () => {
    const status = document.getElementById('status-option').value

    switch (status) {
        case 'status' :
            createCards()
            break

        case 'finalizado' :
            createCardsStatus(status)
            break

        case 'cursando' :
            createCardsStatus(status)
            break;

        default :
            createCards()
            break
    }
}

createCards()

document.getElementById('status-option').addEventListener('change', cases)
