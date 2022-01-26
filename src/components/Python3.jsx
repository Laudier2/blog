import React from 'react'
import './style.css'

export default function Python3() {

    const nova = "_blank"

    return(
        <div>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden text-block">
                <div className="my-3 p-3">
                
                <img src="https://python.org.br/theme/img/site-logo.svg" alt="img" className="ico" />
                <h2 className="display-5 titolo">Aprenda o basico de python aqui</h2>
                <p className="align-baseline">
                    Muitos programadores, de forma equivocada, acabam polarizando o desenvolvimento de sistemas nas linguagens: Java e C#. Ao fazer isso, deixam de perceber que a programação não evolui de forma dependente do avanço dessas tecnologias. Ambas são ótimas opções, mas estão longe de serem as melhores alternativas para tudo. Na verdade, a cada ano, novas linguagens são criadas com diferentes características e diferentes propósitos, atendendo, de forma cada vez mais precisa, determinados tipos de projeto.
                    Um bom exemplo disso é a linguagem Python. Publicado em 1991, o Python traz características que possibilitam escrever o mesmo requisito em menos linhas de código que o necessário em outras linguagens de programação e hoje, além de adotado na construção de soluções web, também está sendo muito utilizado em aplicações que lidam com processamento de texto, machine learning e recomendação de conteúdo, áreas que não param de crescer. Mas, vamos com calma neste momento, não é mesmo? Primeiro, precisamos saber por onde começar e o que é o Python. Para isso, acesse os posts abaixo:
                </p>
                <br />
                <div className="rounded bg-dark col-md-12 text-white p-4 mb-2">
                <hr className="bg-white" />
                    <p>#Aqui é um comentario! A baixo estamos declarando uma variavel x e atribuindo o valor de Olá, mundo a ela, deposi mostrando na tela com o comando print(x).</p>
                    <p className="t1">x = "Ola, Mundo"</p>
                    <p className="t1">print(x)</p>
                    <hr className="bg-white" />
                    <p className="t">Resultado abaixo!</p>
                    <p>Ola, Mundo</p>
                </div>
                <p className="lead">
                    <a href="https://www.python.org/" target={nova} className='btn btn-outline-secondary' >
                    <strong> Quero conhecer</strong>	
                    </a>
                </p>
                </div>
                <div className="bg-dark box-shadow mx-auto" ></div>
            </div>
            
            </div>
        </div>
    )
}