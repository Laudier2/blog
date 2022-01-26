import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Download from './components/Download';
import Home from './pages/'

export default function RoutesRota(state) {

    return (
        <BrowserRouter>
            <Route path="/" exact component={Home } />  
            <Route path="/downloads" exact component={Download} />               
        </BrowserRouter>
    )
}