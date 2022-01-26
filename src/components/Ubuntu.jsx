import React from 'react'
import './style.css'

export default function Ubumtu() {

    const nova = "_blank"

    return(
        <div className="my-3 p-3">
            <img src="https://www.techboxlab.com.br/images/conteudo/Linux/ubuntu-2104-release-features.jpeg" alt="img" className="ico" />
                <h2 className="display-5 titolo">Dicas sobre Ubuntu aqui</h2>  
                <p><strong className="lead">Ubuntu 21.04:</strong> Para que você, leitor, chegasse a este conteúdo, presumo tenha buscado orientações sobre os tipos de Linux existentes Internet à fora e, após a sua análise, instalar o Ubuntu foi considerada a melhor alternativa. De antemão, saiba que está fazendo uma ótima escolha!
                    Uma das distribuições do Linux mais utilizadas, o Ubuntu foi um grande responsável pela popularização do Linux em ambientes desktop, porém mantendo as características que fazem dele um excelente sistema tanto para uso doméstico quanto corporativo.
                    Portanto instalar o Ubuntu significa operar o seu computador a partir de um sistema operacional estável, seguro, atrativo e robusto. Logo, ele é uma distro apropriada para quem deseja aprender vários fundamentos imprescindíveis a quem planeja tornar-se um especialista.
                    Sabendo um pouco da contribuição que o Ubuntu terá para a sua formação Linux, ou até mesmo para melhorar a sua experiência como usuário doméstico, que tal aprender a instalá-lo? O presente artigo fornece um guia prático para instalação do Ubuntu em oito etapas. Vamos a elas?
                </p>
                <p className="lead">
                    <a href="https://ubuntu.com/blog/ubuntu-21-04-is-here" target={nova} className="btn btn-outline-secondary border-1">
                        Vamos ver como fuciona!
                    </a>
                </p>
        </div>
    )
}