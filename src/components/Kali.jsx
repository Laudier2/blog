import React from 'react'
import './style.css'

export default function Kali() {

    const nova = "_blank"

    return(
        <>
        
            <div className="my-3 p-3">
            
            <img src="https://www.bleepstatic.com/content/hl-images/2021/06/02/kali-linux-header.jpg" alt="img" className="ico" />
            <h2 className="display-5 titolo">Dicas sobre Kali Linux aqui</h2>
            <p><strong className="lead">Kali Linux 2022.3: </strong>
            Quer você esteja interessado em uma carreira em segurança cibernética ou apenas queira aprender mais sobre Linux e computadores, Kali é um boa distribuição Linux para usar . É grátis, vem de uma empresa de cibersegurança respeitável, Segurança ofensiva , e vem pré-carregado com a maioria das ferramentas de pesquisa de segurança de que uma pessoa precisa. Vamos aprender como instalar e usar o Kali Linux.
            O Kali Linux é instalado em dispositivos ARM como Raspberry Pi , hosts de máquina virtual como VMWare e VirtualBox , ou diretamente no hardware como um laptop ou PC. A instalação é praticamente a mesma para Kali Linux no VMWare, VirtualBox, Raspberry Pi ou como o sistema operacional principal do seu laptop ou computador desktop
            </p>
            <p className="lead">
                <a href="https://www.kali.org/docs/" target={nova} className="btn btn-outline-secondary border-1">
                    Vamos ver como fuciona!
                </a>
            </p>
            <br />
            
            </div>
            
            <div className="bg-dark box-shadow mx-auto" ></div>
            
        </>
    )
}