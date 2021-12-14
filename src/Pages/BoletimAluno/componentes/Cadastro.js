import React, { useState, useEffect } from 'react'

import firebase from '../../../database/fire'

const Cadastro = () => {

    const [dadosAlunos, setDadosAlunos] = useState({})

    useEffect(() => {
        firebase.child('cadastros').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDadosAlunos({
                    ...dbPhoto.val()
                })
            } else {
                setDadosAlunos({})
            }
        })
    }, [])

    return (
        <div>
            <div className="containerHeader">
                <div className="">
                    <h1 className="titulo">NOTAS 2021</h1>
                    <p className="subtitulo"> TURMA DE MATEMÁTICA</p>
                </div>
            </div>

            
           
                    <table className="tabelaNotas">
                        <thead className="row">
                        
                            <tr>
                            <td class="nome">Nome</td>
                        <td class="notaUm">NotaUm</td>
                        <td class="notaDois">NotaDois</td>
                        <td class="notaTres">NotaTres</td>
                        <td class="notaQuatro">NotaQuatro</td>
                                
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(dadosAlunos).map(id => {
                                    return <tr key={id}>

                                        

                                        <td> {dadosAlunos[id].Nome}</td>
                                        <td> {dadosAlunos[id].NotaUm}</td>
                                        <td> {dadosAlunos[id].NotaDois}</td>
                                        <td> {dadosAlunos[id].NotaTres}</td>
                                        <td> {dadosAlunos[id].NotaQuatro}</td>

                                        

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

           
        
    )
}

export default Cadastro