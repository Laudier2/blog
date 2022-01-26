import React from 'react'
import './style.css'

export default function ReactJS() {

    const nova = "_blank"

    return(
        <>
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 overflow-hidden">
                <div className="my-3 py-3">
                
                <img src="https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png" alt="ico" className="ico" />
                <h2 className="display-5 titolo">Aprenda Reactjs aqui</h2>
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
                    <a href="https://reactjs.org/" target={nova} className="btn btn-outline-info text-dark">
                        Quero conhecer
                    </a>
                </p>
            </div>   
        </>
    )
}