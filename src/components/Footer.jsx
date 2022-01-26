import React from 'react'
import './style.css'

export default function Footer() {


    return(
        <>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                    <small className="d-block mb-3 text-muted">&copy; 2022 José Santana de Jesus- Developer</small>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Conheçamos</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted a" href="/">adin</a></li>
                        <li><a className="text-muted a" href="/">Facebook</a></li>
                        <li><a className="text-muted a" href="/">Youtube</a></li>
                        <li><a className="text-muted a" href="/">Github</a></li>
                        <li><a className="text-muted a" href="/">Whatssap</a></li>
                        <li><a className="text-muted a" href="/">Telegram</a></li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Contato</h5>
                    <ul className="list-unstyled text-small">
                        <li className="a">E-mail: josesantanadeveloper@gmail.com</li>
                        <li className="a">Phone: (75)998172448</li>
                        <li className="a">Whatsapp: (75)998239680</li>
                        <li className="a">Telegram: (75)998239680</li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Projetos</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted a" href="https://conversordemoeda.ga">Ceversor de moedas</a></li>
                        <li><a className="text-muted a" href="https://developer-js.netlify.app/">Portifolio</a></li>
                        <li><a className="text-muted a" href="https://admin-product.netlify.app/">Painel Admin</a></li>
                        <li><a className="text-muted a" href="/">Home</a></li>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h5>Lista complementares</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted a" href="https://www.javascript.com/">JvaScript</a></li>
                        <li><a className="text-muted a" href="https://nodejs.org/en/">Nosejs</a></li>
                        <li><a className="text-muted a" href="https://reactjs.org/">React</a></li>
                        <li><a className="text-muted a" href="https://www.python.org/">Python</a></li>
                    </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}