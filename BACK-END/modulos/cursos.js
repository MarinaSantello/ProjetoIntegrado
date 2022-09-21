/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var cursos = [
    {
        "nome"  :   "Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "../imgs/vector-ds.svg",
        "carga" :   "1200",
    },
    {
        "nome"  :   "Técnico em Redes de Computadores",
        "sigla" :   "REDES",
        "icone" :   "../imgs/vector-rdc.svg",
        "carga" :   "1200"
    }
];

const getCursos = () => {
    let xRetorno = null
    let dadosCurso = []

    cursos.forEach(element => {
        dadosCurso.push(
            {
                nome : element.nome,
                sigla: element.sigla,
                icone: element.icone
            }
        )
        xRetorno = dadosCurso
    })

    return xRetorno
}

module.exports = {
    getCursos
}