'use strict'

import { apiDiciplinasAluno } from "./modulos/rotasAPI.js"

let xParametro = window.location.search.substring(1);
let matricula = xParametro.split('=')[1]

const api = apiDiciplinasAluno(matricula)


const back = async(array) => {
    const infoAluno = await array

    const exit = document.getElementById('back')
    exit.href = `studantPage.html?curso=${infoAluno[0].curso}`
}

const dataStudant = async(array) => {
    const infoAluno = await array
    const main = document.getElementById('main')

    const cardStudant = document.createElement('div')
    cardStudant.classList.add('card-studant')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = infoAluno[0].nomeAluno

    const icone = document.createElement('img')
    icone.classList.add('icone')
    icone.src = infoAluno[0].icone

    cardStudant.appendChild(icone)
    cardStudant.appendChild(nome)

    main.appendChild(cardStudant)
}

const notasDiciplinas = async(array) => {
    const dataDiciplinas = await array

    const main = document.getElementById('main')
    
    const notasContainer = document.createElement('div')
    notasContainer.classList.add('notas-container')

    for (let i = 1; i < dataDiciplinas.length; i++) {
        const infoContainer = document.createElement('div')
        infoContainer.classList.add('info-container')

        const nota = document.createElement('span')
        nota.classList.add('nota-value')
        nota.textContent = dataDiciplinas[i].media

        const backgroundBar = document.createElement('div')
        backgroundBar.classList.add('background-bar')
        backgroundBar.style.backgroundColor = '#a87'
        backgroundBar.style.height = '200px'
        backgroundBar.style.width = '40px'

        const notaBar = document.createElement('div')
        notaBar.classList.add('nota-bar')
        notaBar.style.height = `${dataDiciplinas[i].media}%`

        switch (dataDiciplinas[i].status) {
            case 'Aprovado':
                notaBar.style.backgroundColor = '#3347B0'
                break;
        
            case 'Exame':
                notaBar.style.backgroundColor = '#E5B657'
                break;
        
            case 'Reprovado':
                notaBar.style.backgroundColor = '#C11010'                
                break;
            
            default:
                break;
        }

        const sigla = document.createElement('span')
        sigla.classList.add('sigla')
        sigla.textContent = dataDiciplinas[i].sigla

        infoContainer.appendChild(nota)
        infoContainer.appendChild(backgroundBar)
        backgroundBar.appendChild(notaBar)
        infoContainer.appendChild(sigla)

        notasContainer.appendChild(infoContainer)
    }

    main.appendChild(notasContainer)
}

back(api)
dataStudant(api)
notasDiciplinas(api)