import './App.css'

import React from "react";

import Primeiro from './components/Primeiro'
import ComParametros from './components/ComParametros'
import Card from './components/layouts/Card';
import ComFilhos from './components/ComFIlhos';
import Repeticao from './components/Repeticao';
import Conditional from './components/Conditional';
import ConditionalIf from './components/ConditionalIf';

export default (_props) => (
    <div className="App">
        <Card titulo="#1 - Primeiro Componente">
            <Primeiro/>
        </Card>

        <Card titulo="#2 - Componente com Parametros">
            <ComParametros titulo="Titulo comp" subtitulo="Subtitulo comp"/>
        </Card>

        <Card titulo="#3 - Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Theo</li>
                    <li>???</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#4 - Componente com Repeticao">
            <Repeticao/>
        </Card>

        <Card titulo="#5 - Componente de condicional Ternario">
            <Conditional numero={1}/>
            <Conditional numero={2}/>
        </Card>

        <Card titulo="#6 - Componente de condicional com IF">
            <Conditional numero={3}/>
            <Conditional numero={4}/>
        </Card>
    </div>
);