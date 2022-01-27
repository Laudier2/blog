import React from 'react'
import './style.css'

export default function JsComplementar() {

    const nova = "_blank"

    return(
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                <h2 className="display-5">Conteúdo complementar JavaScript</h2>
                <p>
                    <strong className="lead">Pronto para experimentar o JavaScript?</strong>
                    Comece a aprender aqui digitando seu primeiro nome entre aspas e terminando com um ponto e vírgula. Por exemplo, você pode digitar o nome "Jamie";  e pressionar enter.</p>
                    <br />
                    <p className="lead">
                    <a href="https://www.javascript.com/" target={nova} className="btn btn-outline-info text-dark">
                        Site oficial JavaScript
                    </a>
                </p>
                </div>
                <div className="bg-white box-shadow mx-auto"></div>
            </div>
        </div>
            
    )
}