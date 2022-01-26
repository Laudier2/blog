import React from 'react'
import Ads from '../components/GoogleAds'
import Footer from '../components/Footer'
import Nav from '../components/NavBar'
import Rcter from '../components/ReactJS'
import Node from '../components/NodeJS'
import Python from '../components/Python3'
import Programa from '../components/Programacao'
import IndexPricipal from './IndexPricipal'
import JavaScript from '../components/JavaScript'
import ReactJS from '../components/ReactJS'
import JsComplementar from '../components/JsComplementar'
import RcComplementar from '../components/RcComplementar'
import Kali from '../components/Kali'
import Ubuntu from '../components/Ubuntu'

export default function Home() {

    return(
        <>

            <Nav />
            <IndexPricipal />
            <Rcter />
            <Node />
            <Python />
            <JavaScript />
            <ReactJS />
            <Programa />
            <Kali />
            <Ubuntu />
            <RcComplementar />
            <JsComplementar />
            <Ads slot="5588472210" className="conatiner" />
            <Footer />
            
        </>
    )
}