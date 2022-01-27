import React from 'react'
import './style.css'

export default function NodeJS() {

    const nova = "_blank"

    return(
        <div className="mrg">
            <div className="bg-success1 rounded mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-blacks overflow-hidden">
                <div className="my-3 py-3">
    
                <img src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg" alt="img" className="ico mb-2" />
                <h2 className="display-5 titolo">Aprenda Nodejs aqui</h2>
                <p>
                    Node.js é um fenômeno, e já tem vários anos já. 
                    Diversos players gigantes da indústria de Internet tem adotado a plataforma, seja como uma ferramenta auxiliar, seja como sua principal tecnologia. O fato é que funciona, é eficiente e eficaz.                    
                </p>
                <br />
                <p>
                    A ideia do post de hoje é explicar de uma vez por todas o que é Node.js e também solucionar outras dúvidas mais fundamentais, ao mesmo tempo em que apresento os principais conceitos de Node.js, suas principais características, vantagens, desvantagens, tecnologias concorrentes e falar das principais extensões.
                </p>
                <br /><br />
                <div className="rounded bg-dark col-md-12 text-white p-4 mb-2">
                    <hr className="bg-white" />
                    <p>Abaixo estamos declarando uma variavel y e atribuindo o valor de Olá, mundo a ela, depois mostrando na tela com o comando console.log(y).</p>
                    <p className="t1">let x = "Ola, Mundo"</p>
                    <p className="t1">console.log(x)</p>
                    <hr className="bg-white" />
                    <p className="t">Resultado abaixo!</p>
                    <p>Ola, Mundo</p>
                    <hr className="bg-white" />
                    <p>Exemplo 2</p>
                    <p className="t1">const y = 2 + 2</p>
                    <p className="t1">console.log(y)</p>
                    <hr className="bg-white" />
                    <p>4</p>
                </div>
                <p className="lead">
                    <a href="https://nodejs.org/en/" target={nova} className='btn btn-outline-secondary' >
                    <strong> Quero conhecer</strong>	
                    </a>
                </p>
                </div>
                <div className="bg-light box-shadow mx-auto" ></div>
            </div>
        </div>
    )
}