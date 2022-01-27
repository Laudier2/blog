import React from 'react'
import NavBar from './NavBar'
import './style.css'
import Ads from './GoogleAds'

export default function Download() {

    const nova = "_blank"

    const lista = [
        {
            name: "Baixar Python3",
            texto: 'Fassa o download direto no site oficial do python.',
            link: "https://www.python.org/"
        }, 
        {
            name: "Baixar VsCode",
            texto: 'Fassa o download direto no site oficial Visual Studio Code.',
            link: "https://code.visualstudio.com/"
        },  
        {
            name: "Baixar Nodejs",
            texto: 'Fassa o download direto no site oficial Npde.',
            link: "https://nodejs.org/en/"
        },
        {
            name: "Baixar Kali linux",
            texto: 'Fassa o download direto no site oficial.',
            link: "https://www.kali.org/"
        },
        {
            name: "Baixar Ubuntu",
            texto: 'Fassa o download direto no site oficial.',
            link: "https://ubuntu.com/blog/ubuntu-21-04-is-here#download"
        },
        {
            name: "Baixar Windows 10",
            texto: 'Fassa o download direto no site oficial.',
            link: "https://ubuntu.com/blog/ubuntu-21-04-is-here#download"
        },
        {
            name: "instalando Espress-generator",
            texto: 'Fassa o download direto no site oficial.',
            link: "https://www.npmjs.com/package/express-generator"
        },
        {
            name: "Instalando node via nvm no linux",
            texto: 'Fassa o download direto no site oficial.',
            link: "https://nodejs.org/pt-br/download/package-manager/"
        },
        {
            name: "instalando Create-React-app",
            texto: 'Como instala o Create-React-app com yarn.',
            link: "https://yarnpkg.com/package/create-react-app"
        },
        {
            name: "Baixar Insominia",
            texto: 'Fassa o download direto no site oficial.',
            link: "https://insomnia.rest/download"
        },
    ]

    return(
        <div>
            <NavBar />
            <h1 className="titoloD mt-1">Aria de Downloads e Instalação independentes</h1>
            <div className="mt-1 bg-person rounded">
                {lista.map(res => (
                    <ul className="lado rounded col-md-3 bg-info mt-2" key={res}>
                        <h3 className="titolo-j mt-2">{res.name}</h3>
                        <p>{res.texto}</p>
                        <a href={res.link} target={nova} className="btn btn-success mb-2 btn-block">
                            Baixe ou Instale
                        </a>
                    </ul>
                ))}
                <br />
                <Ads slot="5588472210" />
            </div>
        </div>
    )
}