import React from 'react'
import './style.css'

export default function RcComplementar() {

    const nova = "_blank"

    return(
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div>
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                <h2 className="display-5">Conteúdo complementares React</h2>
                <p>
                    <strong className="lead">Pronto para experimentar o JavaScript?</strong>
                    Pronto para experimentar o JavaScript?Comece a aprender aqui com os exemplos prático no site oficial do react. Aprenda sobre componentes hooks e as novidades que o react vem trazendo a cada dia, fique sempre por dentro.</p>
                    <br />
                    <p className="lead">
                    <a href="https://reactjs.org/" target={nova} className="btn btn-outline-info text-dark">
                        Site oficial React
                    </a>
                </p>
                </div>
                <div className="bg-white box-shadow mx-auto" ></div>
            </div>
        </div>
        </div>
    )
}