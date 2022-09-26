/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var cursos = [
    {
        "nome"  :   "Técnico em Desenvolvimento de Sistemas",
        "nome2" :   "DS",
        "sigla" :   "DS",
        // "icone" :   "../imgs/vector-ds.svg",
        "icone" :   "./FRONT-END/imgs/vector-ds.svg",
        "carga" :   "1200",
    },
    {
        "nome"  :   "Técnico em Redes de Computadores",
        "nome2" :   "REDES",
        "sigla" :   "RDC",
        // "icone" :   "../imgs/vector-rdc.svg",
        "icone" :   "./FRONT-END/imgs/vector-rdc.svg",
        "carga" :   "1200"
    }
];

const getCursos = () => {
    let xRetorno = null
    let dadosCurso = []

    cursos.forEach(element => {
        dadosCurso.push(
            {
                nome     : element.nome,
                nomeCurto: element.nome2,
                sigla    : element.sigla,
                icone    : element.icone
            }
        )
        xRetorno = dadosCurso
    })

    return xRetorno
}

module.exports = {
    getCursos
}