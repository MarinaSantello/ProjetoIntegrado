var cursos = [
    {
        "nome"  :   "Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
        "carga" :   "1200",
    },
    {
        "nome"  :   "Técnico em Redes de Computadores",
        "sigla" :   "RDC",
        "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga" :   "1200"
    }
];

const getCurso = (filtro) => {
    const sigla = filtro.toUpperCase()
    let xRetorno = null
    let dadosCurso = []

    cursos.forEach(element => {
        if(element.sigla.includes(sigla)){
            dadosCurso.push(
                {
                    nome : element.nome,
                    sigla: element.sigla,
                    icone: element.icone
                }
            )
            xRetorno = dadosCurso
        }
    })

    return xRetorno
}

module.exports = {
    getCurso
}