import React from 'react'
import './style.css'

export default function IndexPricipal() {

    const nova = "_blank"

    return(
        <>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <img src="t2.png" className="imgr" alt="img" />
                
            <div className="col-md-4 p-lg-5 mx-auto">
                <h1 className="display-5 font-weight-normal titolo2">Laudier ST Developer</h1>
                <p className="lead font-weight-normal">Tire suas duvidas por aqui</p>
                <a className="btn btn-outline-secondary" target={nova} href="https://developer-js.netlify.app/">Contate-nos</a>
            </div>
            <div className="product-device box-shadow d-none d-md-block"></div>
            <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
        </>
    )
}