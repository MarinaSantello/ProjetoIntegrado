const e = require("cors");

var alunos = [
     
    {       
        "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Aline de Almeida Campos",
            "matricula" : "20151001001",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDC",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2024",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IR",
                            "carga" :   "75",
                            "media" :   "93",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IN",
                            "carga" :   "120",
                            "media" :   "68",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HARE",
                            "carga" :   "75",
                            "media" :   "74",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SER",
                            "carga" :   "240",
                            "media" :   "85",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CAES",
                            "carga" :   "150",
                            "media" :   "59",
                            "status":   "Exame"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Ana Carolina Vasconcelos Barreto",
            "matricula" : "20151001002",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDC",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "52",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IR",
                            "carga" :   "75",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IN",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HARE",
                            "carga" :   "75",
                            "media" :   "54",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SER",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CAES",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "ANDERSON GERÔNCIO SOUZA SILVA",
            "matricula" : "20151001004",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDC",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "30",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IR",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IN",
                            "carga" :   "120",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HARE",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SER",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CAES",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "Aristóteles da Silva Lima",
            "matricula" : "20151001007",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDC",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2021",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "86",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IR",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IN",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HARE",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SER",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CAES",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "sigla" :   "SI",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "sigla" :   "ADMS",
                            "carga" :   "240",
                            "media" :   "74",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "sigla" :   "PJ",
                            "carga" :   "400",
                            "media" :   "89",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Gabriella Macedo Paiva",
            "matricula" : "20151001014",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDC",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2020",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IR",
                            "carga" :   "75",
                            "media" :   "94",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IN",
                            "carga" :   "120",
                            "media" :   "82",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HARE",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SER",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CAES",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "sigla" :   "SI",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "sigla" :   "ADMS",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "sigla" :   "PJ",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Debora Alves da Silva",
            "matricula" : "20151001012",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDC",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IR",
                            "carga" :   "75",
                            "media" :   "98",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IN",
                            "carga" :   "120",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HARE",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SER",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CAES",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "sigla" :   "SI",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "sigla" :   "ADMS",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "sigla" :   "PJ",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Heloisa Santos Araujo",
            "matricula" : "20151001017",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "sigla" :   "IR",
                            "carga" :   "150",
                            "media" :   "98",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "sigla" :   "LIMA",
                            "carga" :   "120",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "sigla" :   "BD",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "sigla" :   "PWBE",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "sigla" :   "PWFE",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados II",
                            "sigla" :   "BDII",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Aplicações Móveis",
                            "sigla" :   "APPM",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "sigla" :   "PJ",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Ingrid Paloma da Costa Porto",
            "matricula" : "20151001018",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2018",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "sigla" :   "IR",
                            "carga" :   "150",
                            "media" :   "94",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "sigla" :   "LIMA",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "sigla" :   "BD",
                            "carga" :   "75",
                            "media" :   "30",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "sigla" :   "PWBE",
                            "carga" :   "240",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "sigla" :   "PWFE",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados II",
                            "sigla" :   "BDII",
                            "carga" :   "300",
                            "media" :   "20",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Aplicações Móveis",
                            "sigla" :   "APPM",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "sigla" :   "PJ",
                            "carga" :   "400",
                            "media" :   "50",
                            "status":   "Exame"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "HÉLIDA BENTO DE OLIVEIRA LINS",
            "matricula" : "20151001016",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2024",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "sigla" :   "IP",
                            "carga" :   "150",
                            "media" :   "99",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "sigla" :   "LIMA",
                            "carga" :   "120",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "sigla" :   "BD",
                            "carga" :   "75",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "sigla" :   "PWBE",
                            "carga" :   "240",
                            "media" :   "64",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "sigla" :   "PWFE",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "Isaasc de Sousa Araújo",
            "matricula" : "20151001019",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "sigla" :   "IP",
                            "carga" :   "150",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "sigla" :   "LIMA",
                            "carga" :   "120",
                            "media" :   "95",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "sigla" :   "BD",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "sigla" :   "PWBE",
                            "carga" :   "240",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "sigla" :   "PWFE",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "José Matheus da Silva Miranda",
            "matricula" : "20151001024",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "sigla" :   "IP",
                            "carga" :   "150",
                            "media" :   "40",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "sigla" :   "LIMA",
                            "carga" :   "120",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "sigla" :   "BD",
                            "carga" :   "75",
                            "media" :   "60",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "sigla" :   "PWBE",
                            "carga" :   "240",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "sigla" :   "PWFE",
                            "carga" :   "150",
                            "media" :   "80",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        }
    ];

const getAlunosCurso = (filtro) => {
    const sigla = filtro.toUpperCase()
    let xRetorno = null
    let listaAlunos = []
    
    alunos.forEach(element => {
        element.curso.forEach(item => {
            if(item.sigla.includes(sigla)) {
                listaAlunos.push(
                    {
                        nome     : element.nome,
                        icone    : element.foto,
                        status   : element.status,
                        matricula: element.matricula
                    }
                )
                xRetorno = listaAlunos
            }
        })
    })
    return xRetorno
}

const getAlunos = (filtroSigla, anoConclusao,filtroStatus) => {
    const sigla = filtroSigla.toUpperCase()
    const ano = anoConclusao
    const status = filtroStatus.toUpperCase()
    let xRetorno = null
    let listaAlunos = []
    
    alunos.forEach(element => {
        element.curso.forEach(item => {
            if(item.sigla.includes(sigla) && item.conclusao.includes(ano) && element.status.toUpperCase().includes(status)) {
                listaAlunos.push(
                    {
                        nome     : element.nome,
                        icone    : element.foto,
                        status   : element.status,
                        matricula: element.matricula
                    }
                )
                xRetorno = listaAlunos
            }
        })
    })
    return xRetorno
}

const getAlunosCursoStatus = (filtroSigla, filtroStatus) => {
    const sigla = filtroSigla.toUpperCase()
    const status = filtroStatus.toUpperCase()
    let xRetorno = null
    let listaAlunos = []
    
    alunos.forEach(element => {
        element.curso.forEach(item => {
            if(item.sigla.includes(sigla) && element.status.toUpperCase().includes(status)) {
                listaAlunos.push(
                    {
                        nome     : element.nome,
                        icone    : element.foto,
                        status   : element.status,
                        matricula: element.matricula
                    }
                )
                xRetorno = listaAlunos
            }
        })
    })
    return xRetorno
}

const getAlunosAnoCurso = (filtroAno, filtroCurso) => {
    const ano = filtroAno
    const curso = filtroCurso.toUpperCase()
    let xRetorno = null
    let listaAlunos = []

    alunos.forEach(element => {
        element.curso.forEach(item => {
            if(item.conclusao.includes(ano) && item.sigla.includes(curso)) {
                listaAlunos.push(
                    {
                        nome  : element.nome,
                        icone : element.foto,
                        status: element.status
                    }
                )
                xRetorno = listaAlunos
            }
        });
    });
    
    return xRetorno
}

const getAlunosStatus = (filtro) => {
    const status = filtro.toUpperCase()
    let xRetorno = null
    let listaAlunos = []

    alunos.forEach(element => {
        if (element.status.toUpperCase().includes(status)){
            listaAlunos.push(
                {
                    nome  : element.nome,
                    icone : element.foto,
                    status: element.status
                }
            )
            xRetorno = listaAlunos
        }
    });

    return xRetorno
}

const getDiciplinaAluno = (filtro) => {
    const matricula = filtro
    let xRetorno = null
    let infoAluno = []

    alunos.forEach(element => {
        if (element.matricula.includes(matricula)) {
            infoAluno.push(
                {
                    nomeAluno : element.nome,
                    icone     : element.foto,
                    curso     : element.curso[0].sigla
                }
            )
            
            element.curso[0].disciplinas.forEach(item => {
                infoAluno.push(
                    {
                        disciplina: item.nome,
                        sigla     : item.sigla,
                        media     : item.media,
                        status    : item.status
                    }
                )
                xRetorno = infoAluno
            });
        }
    });

    return xRetorno
}

module.exports = {
    getAlunosCurso,
    getAlunos,
    getAlunosAnoCurso,
    getDiciplinaAluno,
    getAlunosStatus,
    getAlunosCursoStatus
}


// console.log(getAlunosAnoCurso(2022, 'rdc'))