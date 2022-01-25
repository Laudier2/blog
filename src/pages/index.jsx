import React from 'react'
import Ads from '../components/GoogleAds'
import './style.css'

export default function Home() {

    const nova = "_blank"

    return(
        <>
            <nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <a className="py-2" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                    </a>
                    <a className="py-2 d-none d-md-inline-block" href="/">Home</a>
                    <a className="py-2 d-none d-md-inline-block" target={nova} href="https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g">Youtube</a>
                    <a className="py-2 d-none d-md-inline-block" target={nova} href="https://github.com/Laudier2?tab=repositories">GitHub</a>
                    <a className="py-2 d-none d-md-inline-block" target={nova} href="https://developer-js.netlify.app/">Portifolio</a> 
                    <a className="py-2 d-none d-md-inline-block" target={nova} href="https://www.linkedin.com/in/jos%C3%A9-santana-de-jesus-8949b3124/">Linkdin</a> 
                </div>
            </nav>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <img src="t2.png" className="imgr" alt="img" />
                
            <div className="col-md-5 p-lg-5 mx-auto">
                <h1 className="display-4 font-weight-normal">Laudier ST Developer</h1>
                <p className="lead font-weight-normal">Crie gerecie seu sistema ou programas por aqui.</p>
                <a className="btn btn-outline-secondary" href="/">Contatinos</a>
            </div>
            <div className="product-device box-shadow d-none d-md-block"></div>
            <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-dark1 mr-md-3 rounded pt-md-5 text-dark overflow-hidden">
                <div className="my-3 py-3 ml-4 mr-3">
                <h2 className="display-5 titolo mb-4"><img src="https://becode.com.br/wp-content/uploads/2016/10/Por-que-usar-JavaScript.gif" alt="gif" className="ico" /> Aprenda a programa por aqui!</h2>
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
                </div>
                <div className="bg-light box-shadow mx-auto" ></div>
            </div>
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
                <div className="my-3 p-3">
                <h2 className="display-5 titolo">Dicas sobre linux aqui</h2>
                <img src="https://www.bleepstatic.com/content/hl-images/2021/06/02/kali-linux-header.jpg" alt="img" className="ico" />
                <p><strong className="lead">Kali Linux 2022.3: </strong>
                Quer você esteja interessado em uma carreira em segurança cibernética ou apenas queira aprender mais sobre Linux e computadores, Kali é um boa distribuição Linux para usar . É grátis, vem de uma empresa de cibersegurança respeitável, Segurança ofensiva , e vem pré-carregado com a maioria das ferramentas de pesquisa de segurança de que uma pessoa precisa. Vamos aprender como instalar e usar o Kali Linux.
                O Kali Linux é instalado em dispositivos ARM como Raspberry Pi , hosts de máquina virtual como VMWare e VirtualBox , ou diretamente no hardware como um laptop ou PC. A instalação é praticamente a mesma para Kali Linux no VMWare, VirtualBox, Raspberry Pi ou como o sistema operacional principal do seu laptop ou computador desktop
                </p>
                <p className="lead">
                    <a href="/" target={nova} className="btn btn-outline-secondary border-1">
                        Vamos ver como fuciona!
                    </a>
                </p>
                <br />
                <img src="https://www.techboxlab.com.br/images/conteudo/Linux/ubuntu-2104-release-features.jpeg" alt="img" className="ico" />
                <p><strong className="lead">Ubuntu 21.04:</strong> Para que você, leitor, chegasse a este conteúdo, presumo tenha buscado orientações sobre os tipos de Linux existentes Internet à fora e, após a sua análise, instalar o Ubuntu foi considerada a melhor alternativa. De antemão, saiba que está fazendo uma ótima escolha!
                    Uma das distribuições do Linux mais utilizadas, o Ubuntu foi um grande responsável pela popularização do Linux em ambientes desktop, porém mantendo as características que fazem dele um excelente sistema tanto para uso doméstico quanto corporativo.
                    Portanto instalar o Ubuntu significa operar o seu computador a partir de um sistema operacional estável, seguro, atrativo e robusto. Logo, ele é uma distro apropriada para quem deseja aprender vários fundamentos imprescindíveis a quem planeja tornar-se um especialista.
                    Sabendo um pouco da contribuição que o Ubuntu terá para a sua formação Linux, ou até mesmo para melhorar a sua experiência como usuário doméstico, que tal aprender a instalá-lo? O presente artigo fornece um guia prático para instalação do Ubuntu em oito etapas. Vamos a elas?
                </p>
                <p className="lead">
                    <a href="/" target={nova} className="btn btn-outline-secondary border-1">
                        Vamos ver como fuciona!
                    </a>
                </p>
                </div>
                <Ads slot="5588472210" className="conatiner" />
                <div className="bg-dark box-shadow mx-auto" ></div>
            </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden text-block">
                <div className="my-3 p-3">
                <h2 className="display-5 titolo">Aprenda o basico de python aqui</h2>
                <img src="https://python.org.br/theme/img/site-logo.svg" alt="img" className="ico" />
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
                    <a href="/" target={nova} className='btn btn-outline-secondary' >
                    <strong> Quero conhecer</strong>	
                    </a>
                </p>
                </div>
                <div className="bg-dark box-shadow mx-auto" ></div>
            </div>
            <div className="bg-success1 rounded mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-blacks overflow-hidden">
                <div className="my-3 py-3">
                <h2 className="display-5 titolo">Aprenda Nodejs aqui</h2>
                <br />
                <img src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg" alt="img" className="ico mb-2" />
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
                    <p>A baixo estamos declarando uma variavel y e atribuindo o valor de Olá, mundo a ela, deposi mostrando na tela com o comando console.log(y).</p>
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
                    <a href="/" target={nova} className='btn btn-outline-secondary' >
                    <strong> Quero conhecer</strong>	
                    </a>
                </p>
                </div>
                <div className="bg-light box-shadow mx-auto" ></div>
            </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
                <div className="my-3 p-3">
                <h2 className="display-5">Curso JavaScript basico</h2>
                <img src="https://www.weblink.com.br/blog/wp-content/uploads/2018/04/O-Que-e-JavaScript-e-Como-Funciona-facebook.png" alt="img" className="ico" />
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
                    <a href="/" target={nova} className="btn btn-outline-warning text-dark">
                        Quero conhecer
                    </a>
                </p>
                </div>
                <div className="bg-white box-shadow mx-auto" ></div>
            </div>
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
                <div className="my-3 py-3">
                <h2 className="display-5">Aprenda Reactjs aqui</h2>
                <img src="https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png" alt="ico" className="ico" />
                <p className="lead">
                O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.Os componentes dessa ferramenta foram desenvolvidos pelo Facebook. Ela foi lançada em 2013 como uma ferramenta JavaScript de código aberto. Atualmente, ela permanece na frente das suas principais competidoras, como a Angular e a Bootstrap, as duas bibliotecas JavaScript mais bem vendidas.  Neste artigo, vamos ajudar você a entender mais sobre o que é React e ele como funciona. Assim, você vai poder tirar proveito para incrementar seu trabalho como desenvolvedor front-end.
                </p>
                <p><strong className="lead">Por Que Usar React? </strong>O React tem sido usado por grandes companhias ao redor do mundo. Algumas delas: Netflix, Airbnb, American Express, Facebook, WhatsApp, eBay e Instagram. Essa é a prova de que a ferramenta tem um número de vantagens que não têm nem comparação nos seus competidores.   Abaixo estão algumas das razões para usar o React.
                </p>
                <p><strong className="lead">1. Fácil de Usar. </strong>
                    O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: tornar a experiência do usuário com a interface mais eficiente. Ela pode ser categorizada como o “V” no padrão MVC (Model-View-Controller). Como um desenvolvedor de JavaScript, vai ser fácil para você entender o básico do React. Para fortalecer seu entendimento, dê uma explorada em alguns dos tutoriais já existentes sobre o React. Eles contêm muita informação de como usar a ferramenta, como vídeos, tutoriais e dados que podem enriquecer seus conhecimentos.
                </p>
                <p>
                    <strong>2. Suporte a Componente Reusável em Java. </strong> O React permite que você reuse componentes que tenham sido desenvolvido em outras aplicações e que usem a mesma função. A função de reusabilidade é uma vantagem importante para desenvolvedores em geral.
                </p>
                <p><strong className="lead">3. Componente Fácil de Escrever. </strong>
                    Também conhecido como React JS, o componente do React é fácil de escrever porque ele usa JSX, uma extensão de sintaxe opcional para JavaScript. Ela permite que você combine HTML com JavaScript.   O JSX é uma excelente combinação de JavaScript e HTML. Ela simplesmente simplifica toda a estrutura de codificação escrita de um site. Além disso, a extensão também faz com que a renderização de múltiplas funções seja mais fácil. Ainda que o JSX não seja a extensão de sintaxe mais popular, ela tem provado ser bastante eficiente. Especialmente quando falamos em desenvolver componentes especiais ou aplicações de alto rendimento.</p>
                <p>
                    <strong>4. Melhor Desempenho com Virtual DOM. </strong> 
                    O React melhora, de maneira eficiente, o processo de atualização do DOM (Document Object Model). Como você deve saber, esse processo pode causar muita frustração em projetos baseados em aplicações-web. Por sorte, o React usa Virtual DOMs, então você consegue driblar esses problemas. A ferramenta permite que você construa um Virtual DOM e o hospede na memória. Como resultado, toda vez que acontece uma mudança no DOM real, o virtual se modifica imediatamente.      O sistema vai impedir que o DOM real faça atualizações constantemente. Por conta disso, a velocidade da sua aplicação não vai ser interrompida.
                </p>
                <p><strong className="lead">5. Amigável a SEO. </strong>
                    O React permite que você crie uma interface de usuário que pode ser encontrada e acessa em diversos motores de busca. Esse recurso é uma vantagem sensacional porque nem todos os frameworks de JavaScript são amigáveis a SEO. Junto a isso, como o React melhora o processamento da sua aplicação, ele também pode melhorar os resultados do seu SEO. Afinal, o tempo de carregamento de um site é um fator crucial na otimização de SEO.   Porém, você deve se atentar ao fato de que o React é apenas uma biblioteca JavaScript. Isso significa que você não pode fazer tudo com ele. O uso de bibliotecas adicionais podem ser necessárias para propósitos de gerenciamento, apontamento ou interações complexas.</p>
                </div>
                <div className="bg-white box-shadow mx-auto" ></div>
                <p className="lead">
                    <a href="/" target={nova} className="btn btn-outline-info text-dark">
                        Quero conhecer
                    </a>
                </p>
            </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                <h2 className="display-5">Conteudo complementares JvaScript</h2>
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
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                <h2 className="display-5">Conteudo complementares React</h2>
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
            

            <footer className="container py-5">
            <div className="row">
                <div className="col-12 col-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                <small className="d-block mb-3 text-muted">&copy; 2022 José Santana de Jesus- Developer</small>
                </div>
                <div className="col-6 col-md">
                <h5>Conheçamos</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="/">adin</a></li>
                    <li><a className="text-muted" href="/">Facebook</a></li>
                    <li><a className="text-muted" href="/">Youtube</a></li>
                    <li><a className="text-muted" href="/">Github</a></li>
                    <li><a className="text-muted" href="/">Whatssap</a></li>
                    <li><a className="text-muted" href="/">Telegram</a></li>
                </ul>
                </div>
                <div className="col-6 col-md">
                <h5>Contato</h5>
                <ul className="list-unstyled text-small">
                    <li>E-mail: josesantanadeveloper@gmail.com</li>
                    <li>Phone: (75)998172448</li>
                    <li>Whatsapp: (75)998239680</li>
                    <li>Telegram: (75)998239680</li>
                </ul>
                </div>
                <div className="col-6 col-md">
                <h5>Projetos</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="https://conversordemoeda.ga">Ceversor de moedas</a></li>
                    <li><a className="text-muted" href="https://developer-js.netlify.app/">Portifolio</a></li>
                    <li><a className="text-muted" href="https://admin-product.netlify.app/">Painel Admin</a></li>
                    <li><a className="text-muted" href="/">Home</a></li>
                </ul>
                </div>
                <div className="col-6 col-md">
                <h5>Lista complementares</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="https://www.javascript.com/">JvaScript</a></li>
                    <li><a className="text-muted" href="https://nodejs.org/en/">Nosejs</a></li>
                    <li><a className="text-muted" href="https://reactjs.org/">React</a></li>
                    <li><a className="text-muted" href="https://www.python.org/">Python</a></li>
                </ul>
                </div>
            </div>
            </footer>
        </>
    )
}