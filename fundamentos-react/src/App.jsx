import './App.css'

import React from "react";

import Primeiro from './components/Primeiro'
import ComParametros from './components/ComParametros'
import Card from './components/layouts/Card';
import ComFilhos from './components/ComFIlhos';
import Repeticao from './components/Repeticao';
import Conditional from './components/Conditional';
import ConditionalIf from './components/ConditionalIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';

export default (_props) => (
    <div className="App">
        <h2>Fundamentos React</h2>

        <div className='Cards'>
            <Card titulo="#1 - Primeiro Componente" color="#FA6900">
                <Primeiro/>
            </Card>

            <Card titulo="#2 - Componente com Parametros" color="#00BFFF">
                <ComParametros titulo="Titulo comp" subtitulo="Subtitulo comp"/>
            </Card>

            <Card titulo="#3 - Componente com filhos" color="#B0C4DE">
                <ComFilhos>
                    <ul>
                        <li>Theo</li>
                        <li>???</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#4 - Componente com Repeticao" color="#66CDAA">
                <Repeticao/>
            </Card>

            <Card titulo="#5 - Componente de condicional Ternario" color="#9370DB">
                <Conditional numero={1}/>
                <Conditional numero={2}/>
            </Card>

            <Card titulo="#6 - Componente de condicional com IF" color="#ADD8E6">
                <ConditionalIf numero={3}/>
                <ConditionalIf numero={4}/>
            </Card>

            <Card titulo="#7 - Comunicacao direta" color="#00FFFF">
                <Pai sobrenome="React da silva JS"></Pai>
            </Card>

            <Card titulo="#8 - Comunicacao indireta" color="#98FB98">
                <Super></Super>
            </Card>

            <Card titulo="#9 - Input" color="#808000">
                <Input/>
            </Card>

            <Card titulo="#10 - Contador" color="#FAFAD2">
                <Contador passo={1} valorInicial={11}/>
            </Card>
        </div>
    </div>
);