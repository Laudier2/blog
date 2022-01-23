import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/'

export default function RoutesRota(state) {

    return (
        <BrowserRouter>
            <Route path="/" exact component={Home } />                 
        </BrowserRouter>
    )
}