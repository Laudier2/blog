import React from 'react'
import './style.css'

export default function Programacao() {

    const nova = "_blank"

    return(
        <>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-dark1 mr-md-3 rounded pt-md-5 text-dark overflow-hidden">
                    <div className="my-3 py-3 ml-4 mr-3">
                        <img src="https://becode.com.br/wp-content/uploads/2016/10/Por-que-usar-JavaScript.gif" alt="gif" className="ico" /> 
                        <h2 className="display-5 titolo mb-4">Aprenda a programa por aqui!</h2>
                        <strong className="lead">Algoritmos</strong>
                        <p>Um algoritmo é uma sequência lógica finita de passos para realizar uma tarefa ou resolver um problema. Em nosso dia a dia utilizamos algoritmos para realizar nossas atividades, definindo a sequência de atividades que devemos fazer para atingir um objetivo. Um exemplo simples é uma receita. Um algoritmo é, num certo sentido, um programa abstrato — dizendo de outra forma, um programa é um algoritmo concretizado. Os programas são visualizados mais facilmente como uma coleção de algoritmos menores combinados de um modo único — da mesma forma que uma casa é construída a partir de componentes.
                            Dessa forma, um algoritmo é uma descrição passo a passo de como o computador irá executar uma operação específica, como, por exemplo, uma ordenação. Um programa, por outro lado, é uma entidade que na verdade implementa uma ou mais operações de forma que seja útil para as pessoas que o utilizam.</p>
                        <br />
                        <strong className="lead">Engenharia de software</strong>
                        <p>A criação de um programa de computador consiste de cinco passos principais:

                            Reconhecer a necessidade de um programa para resolver um problema ou fazer alguma coisa
                            Planejar o programa e selecionar as ferramentas necessárias para resolver o problema
                            Escrever o programa na linguagem de programação escolhida
                            Compilação: tradução do código fonte legível pelo homem em código executável pela máquina, o que é feito através de compiladores e outras ferramentas
                            Testar o programa para ter a certeza de que funciona; se não, regressar ao passo 3
                            Estes cinco passos são colectivamente conhecidos como engenharia de software. A programação põe ênfase nos passos 2, 3 e 4. A codificação põe ênfase no passo 3. O termo coder, por vezes usado como sinônimo para programador, pode tornar-se aviltante porque ignora as capacidades necessárias para lidar com os outros quatro passos.
                        </p>
                        <br />
                        <strong className="lead">História</strong>
                        <p>
                        Heron de Alexandria no século primeiro inventou teatros automatizados que usavam programação análoga para controlar os fantoches, portas, luzes e efeitos de som.
                        A mais antiga programadora de computadores que se conhece é Ada Lovelace, filha de Anabella e de Lord Byron (o poeta). Ao serviço do matemático Charles Babbage, traduziu e expandiu uma descrição da sua máquina analítica. Muito embora Babbage nunca tenha completado a construção de nenhuma das suas máquinas, o trabalho que ele e Ada desenvolveram sobre elas, garantiu a Ada o título de primeira programadora de computadores do mundo (veja as notas de Ada Byron sobre a máquina analítica).[2] A linguagem de programação Ada recebeu o seu nome em homenagem à Ada.
                        Um dos primeiros programadores que se tem notícia de ter completado todos os passos para a computação sem auxílio, incluindo a compilação e o teste, é Wallace J. Eckert. O trabalho deste homem antecede a ascensão das linguagens de computador, porque ele usou a linguagem da matemática para solucionar problemas astronômicos. No entanto, todos os ingredientes estavam lá: ele trabalhou um laboratório de computação para a Universidade de Colúmbia com equipamentos fornecidos pela IBM, completos com uma divisão de serviço de atendimento ao cliente, e consultores de engenharia para propósitos especiais, na cidade de Nova York, na década de 1930, usando cartões perfurados para armazenar os resultados intermediários de seus cálculos, e então formatando os cartões perfurados para controlar a impressão das respostas, igual ao trabalho para os censos décadas antes. Tinha técnicas de debug tais como códigos de cores, bases cruzadas, verificação e duplicação. Uma diferença entre Eckert e os programadores dos dias de hoje é que o exemplo do seu trabalho influenciou o projeto Manhattan. Seu trabalho foi reconhecido por astrônomos do Observatório da Universidade de Yale, Observatório da Universidade de Princeton, Observatório da Marinha dos EUA, Observatório da Faculdade Harvard, Observatório dos estudantes da Universidade da Califórnia, Observatório Ladd da Universidade de Brown e Observatório Sproul da Faculdade de Swarthmore.
                        Alan Turing é frequentemente encarado como o pai da ciência de computadores e, por afinidade, da programação. Ele foi responsável por ajudar na elaboração e programação de um computador destinado a quebrar o código alemão ENIGMA durante a Segunda Guerra Mundial — ver Máquina Enigma.
                        </p>
                        <p className="lead">
                            <a href="https://idocode.com.br/blog/programacao/o-que-e-programacao/#:~:text=O%20Conceito%20de%20Programa%C3%A7%C3%A3o,m%C3%A1quina%20e%20atendem%20diversas%20finalidades." target={nova} className='btn btn-outline-secondary' >
                            <strong> Quero conhecer</strong>	
                            </a>
                        </p>
                    </div>
                <div className="bg-light box-shadow mx-auto" ></div>
            </div>
            
            </div>   
        </>
    )
}