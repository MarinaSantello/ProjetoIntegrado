'use strict'

import { apiCursos, apiAlunosCurso, apiAlunosCursoStatus, apiAlunosCursoConclusao, apiAlunos } from "./modulos/rotasAPI.js"

let xParametro01 = window.location.search.substring(1);
let sigla01 = xParametro01.split('=')[1]

const name = async(array, sigla) => {
    const cursos = await array
    const siglaCurso = sigla

    const h1 = document.createElement('h1')
    h1.classList.add('nome-curso')

    cursos.forEach(element => {
        if(element.sigla.includes(siglaCurso)) {
            h1.textContent = element.nome
        }
    })

    main.appendChild(h1)

}

const infoCards = async(array) => {
    const alunos = await array
    const main = document.getElementById('main')

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('cards-container')

    main.textContent = ''

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

        cardPerson.appendChild(icone)
        cardPerson.appendChild(nome)

        const colorCursando = getComputedStyle(document.documentElement).getPropertyValue('--statusC-color')
        const colorFinalizado = getComputedStyle(document.documentElement).getPropertyValue('--statusF-color')
        
        if (alunos[i].status == 'Cursando') {
            cardPerson.style.backgroundColor = colorCursando
        } 
        else {
            cardPerson.style.backgroundColor = colorFinalizado

        }
        
        cardContainer.appendChild(cardPerson)
    }

    main.appendChild(cardContainer)
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

const createCardsAno = (ano) => {
    let xParametro = window.location.search.substring(1);
    let sigla = xParametro.split('=')[1]

    infoCards(apiAlunosCursoConclusao(sigla, ano))

    console.log(apiAlunosCursoConclusao(sigla, ano))
}

const createCardsAnoStatus = (ano, status) => {
    let xParametro = window.location.search.substring(1);
    let sigla = xParametro.split('=')[1]

    infoCards(apiAlunos(sigla, ano, status))
}

// const cases = () => {
//     const status = document.getElementById('status-option').value
//     const ano = document.getElementById('ano-option').value

//     if (status == 'status' && ano == 'all') {
//         createCards()
//     } else if (status == '') {}

// }

const casesStatus = () => {
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

const casesAno = () => {
    const ano = document.getElementById('ano-option').value

    switch (ano) {
        case 'all' :
            createCards()
            break

        case '2018' :
            createCardsAno(ano)
            console.log(ano)
            break

        case '2019' :
            createCardsAno(ano)
            break;

        case '2020' :
            createCardsAno(ano)
            break;

        case '2021' :
            createCardsAno(ano)
            break;

        case '2022' :
            createCardsAno(ano)
            break;

        case '2023' :
            createCardsAno(ano)
            break;

        case '2024' :
            createCardsAno(ano)
            break;

        default :
            createCards()
            break
    }
}

createCards()

document.getElementById('status-option').addEventListener('change', casesStatus)

document.getElementById('ano-option').addEventListener('change', casesAno)
