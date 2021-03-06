import React from 'react'
import './style.css'

export default function Footer() {

    const nova = "_blank"

    return(
        <>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                    <small className="d-block mb-3 text-muted">&copy; 2022 José Santana de Jesus- Developer</small>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Conheça-nos</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted a" target={nova} href="https://www.linkedin.com/in/jos%C3%A9-santana-de-jesus-8949b3124/">Linkedin</a></li>
                        <li><a className="text-muted a" target={nova} href="https://github.com/Laudier2?tab=repositories">Github</a></li>
                        <li><a className="text-muted a" target={nova} href="https://developer-js.netlify.app/">Portfólio</a></li>
                        <li><a className="text-muted a" target={nova} href="https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g">Youtube</a></li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Contato</h5>
                    <ul className="list-unstyled text-small">
                        <li className="text-muted a">E-mail: josesantanadeveloper@gmail.com</li>
                        <li className="text-muted a">Phone: (75)998172448</li>
                        <li className="text-muted a">Whatsapp: (75)998239680</li>
                        <li className="text-muted a">Telegram: (75)998239680</li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Projetos</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted a" target={nova} href="https://conversordemoeda.ga">Conversor de moedas</a></li>
                        <li><a className="text-muted a" target={nova} href="https://developer-js.netlify.app/">Portfólio</a></li>
                        <li><a className="text-muted a" target={nova} href="https://admin-product.netlify.app/">Painel Admin</a></li>
                        <li><a className="text-muted a" target={nova} href="/">Home</a></li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Lista complementares</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted a" target={nova} href="https://www.javascript.com/">JavaScript</a></li>
                        <li><a className="text-muted a" target={nova} href="https://nodejs.org/en/">Nodejs</a></li>
                        <li><a className="text-muted a" target={nova} href="https://reactjs.org/">React</a></li>
                        <li><a className="text-muted a" target={nova} href="https://www.python.org/">Python</a></li>
                    </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}