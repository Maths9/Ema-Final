import React from "react";
import { Link } from 'react-router-dom'
import "./main.css"

function App() {
    return (

        <div className="container">


            <div className="content first-content">

                <div className="first-column">
                    <h2 className="title title-primary">BEM-VINDO AO</h2>
                    <h2 className=" second-title">EMA</h2>
                    <h2 className=" subtitle">Ensino e Mensagens Acadêmicas</h2>
                </div>


                <div className="teste">
                    <h2 className="title-login">Fazer login</h2>
                </div>

                <div className="second-column">


                    <div className="liste-login">
                        <nav>
                            <ul className="opcoes-login">

                                <li className="loginTeacher">
                                    <i className="fas fa-chalkboard-teacher"></i>
                                    <Link to="/Professor" style={{ textDecoration: "none", color: "#848B92" }}>Professor</Link>
                                </li>

                                <li className="loginAluno">
                                    <i className="fas fa-user-graduate"></i>
                                    <Link to="/Aluno" style={{ textDecoration: "none", color: "#848B92" }}>Aluno</Link>
                                </li>

                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;