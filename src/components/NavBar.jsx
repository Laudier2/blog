import React from 'react'
import Download from './Download'
import './style.css'

export default function NavBar() {

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
                    <button
                        className="navbar-toggler bg-light text-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span> 
                    </button>
                    <div
                        className="collapse bg-light btn-group-toggle p-2"
                        id="navbarToggleExternalContent"
                    >
                        <br />
                        <Download />
                    </div>
                 </div>
            </nav>
        </>
    )
}