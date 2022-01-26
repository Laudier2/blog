import React from 'react'
import './style.css'

export default function JavaScript() {

    const nova = "_blank"

    return(
        <div>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
                <div className="my-3 p-3">
                <img src="https://www.weblink.com.br/blog/wp-content/uploads/2018/04/O-Que-e-JavaScript-e-Como-Funciona-facebook.png" alt="img" className="ico" />
                <h2 className="display-5 titolo">Aprenda JavaScript basico</h2>
                <p>Para grande parte dos usuários de internet de hoje, pode parecer natural que as páginas de um site, vistas através de um navegador, 
                    sejam capazes de fornecer informações dinâmicas, possuírem gráficos interativos ou executarem ações como exibir mapas ou até mesmo 
                    enviar informações de um simples formulário em apenas um clique, mas nem sempre foi assim.Até meados dos anos 90, as páginas da internet 
                    eram estáticas.Isso não significa que nenhuma informação pudesse ser enviada e respondida, mas, quando isso acontecia, minutos e minutos 
                    se passavam até que um retorno pudesse ser visualizado.Isso acontecia porque, a grosso modo, todas as ordens dadas aos navegadores precisavam 
                    ser enviadas a um servidor externo para, lá, serem executadas e, então, retornarem ao seu ponto de partida.Passados alguns anos deste padrão, 
                    em 1995, um pequeno evento mudou radicalmente a maneira como scripts simples eram executados em páginas da web.Com o objetivo de tornar a 
                    navegação na internet mais rápida e fácil, foi desenvolvida uma linguagem de programação que hoje conhecemos como JavaScript.Ao longo deste 
                    conteúdo, explicarei com mais detalhes o que é JavaScript, qual foi o contexto de sua criação, o que pode ser feito com JS e como dominar esta 
                    que é uma das linguagens mais versáteis do mercado de tecnologia.Vamos lá?O que é JavaScript?JavaScript é uma linguagem de programação de alto 
                    nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web.Segundo a Mozilla Foundation, atual nome 
                    da antiga Netscape Communications Corporations, empresa responsável pela criação do JS, “JavaScript é uma linguagem de programação, leve, 
                    interpretada, orientada a objetos, baseada em protótipos e em first-class functions (funções de primeira classe), mais conhecida como a linguagem 
                    de script da Internet.“Com seus scripts é possível incluir, em uma página estática, elementos dinâmicos como mapas, formulários, operações 
                    numéricas, animações, infográficos interativos e muito mais.O JavaScript é uma das mais importantes tecnologias voltadas para o front-end e, 
                    unindo-se ao trio HTML, CSS e PHP, formam um grupo de linguagens que abrangem praticamente todas as exigências do desenvolvimento de uma página 
                    completa, dinâmica e com boa performance.Do final dos anos 90 até meados dos anos 2000, o JS ganhou grande popularidade ao ser utilizado por g
                    randes empresas para a construção de seus sites, como o Facebook, por exemplo.Alguns exemplos de sites que utilizam JS em seu front e back-end 
                    hoje em dia são Ebay, aedIn e Yahoo.Mas o JS não se restringe mais apenas às páginas e aos navegadores, como foi durante vários anos: com o 
                    advento de diversos frameworks, APIs, melhorias e criação de centenas de funções, hoje já é possível utilizar JavaScript em aplicativos mobile, 
                    softwares para desktop e até mesmo em back-end.</p>
                    
                    <strong className="lead">Como o JavaScript funciona?</strong> 
                    <p>JavaScript, originalmente, é uma linguagem de programação client-side, 
                    ou seja, é executada do lado do usuário, mais especificamente pelo navegador utilizado por este usuário.</p>
                
                    <br />
                    <div className="rounded bg-dark col-md-12 text-white p-4 mb-2">
                    <hr className="bg-white" />
                    <p>A baixo estamos vendo o </p>
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
                    <a href="https://www.javascript.com/" target={nova} className="btn btn-outline-warning text-dark">
                        Quero conhecer
                    </a>
                </p>
                </div>
                <div className="bg-white box-shadow mx-auto" ></div>
            </div>
            
            </div>
        </div>
    )
}