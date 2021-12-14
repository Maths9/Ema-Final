import React, { useState, useEffect } from 'react'
import FormularioCadastro from '../Components/FormularioCadastro'
import firebase from '../../../database/fire'


const Cadastro = () => {

    const [dadosAlunos, setDadosAlunos] = useState({})

    let [idAtual, setIdAtual] = useState('')


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

    const addEedit = obj => {

        if (idAtual == '') {
            console.log(obj)
           firebase.child('cadastros').push(
                obj,
                error => {
                    if (error) {
                        console.log(error)
                    } else {
                        setIdAtual('')
                    }
                }
            )
        } else {
           firebase.child(`cadastros/${idAtual}`).set(
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        }
    }


    const deleteCadastro = idAtual => {
        if (window.confirm('Deseja deletar esse cadastro ?')) {
           firebase.child(`cadastros/${idAtual}`).remove(
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        }
    }


    return (
        <><div className="containerHeader">
            <div className="">
                <h1 className="titulo">NOTAS 2021</h1>
                <p className="subtitulo"> TURMA DE MATEMÁTICA</p>
            </div>


        </div><div className="adicionarNotas">
                <FormularioCadastro {...({ addEedit, idAtual, dadosAlunos })} />
            </div><table className="tabelaNotas">
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
                    {Object.keys(dadosAlunos).map(id => {
                        return <tr key={id}>
                            <td> {dadosAlunos[id].Nome}</td>
                            <td> {dadosAlunos[id].NotaUm}</td>
                            <td> {dadosAlunos[id].NotaDois}</td>
                            <td> {dadosAlunos[id].NotaTres}</td>
                            <td> {dadosAlunos[id].NotaQuatro}</td>

                            <td>
                                <a className="btn btn-outline-success" onClick={() => { setIdAtual(id) } }>
                                    <i className="fas fa-pencil-alt"></i>
                                </a>

                                <a className="btn btn-danger" onClick={() => deleteCadastro(id)}>
                                    <i className="far fa-trash-alt"></i>
                                </a>
                            </td>

                        </tr>
                    })}
                </tbody>
            </table></>
               

           
      
    )
}

export default Cadastro