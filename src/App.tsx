import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Estilo from './components/estilo'
//import PrimeiroTexto from './components/Primeiro'
//import MinMax from './components/MinMax'
//import Com1Oficial, { Comp2, Comp3 } from './components/Multi'
//import Aleatorio from './components/Aleatorio'

//import Titulo from './components/Frag'
//import Botao from './components/Botao'
//import Contador from './components/Contador'
//import Pai from './components/com_indireta/Pai'
//import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'

const App = function(){
    const jsx = <Text>Teste</Text>
    return jsx
}

export default () => {

    return (
     <SafeAreaView  style={Estilo.App}>
       {
        <Diferenciar />
       
       /*  
       <ContadorV2/>
       <Pai/> 
       <Com1Oficial/>
        <Comp2/>
        <Comp3/>
        <Text>1 + 1</Text> 
        <Text> {1 + 1}</Text> 
               <PrimeiroTexto></PrimeiroTexto>
        <Aleatorio max={60} min={1}/>
        <Aleatorio max={60} min={1}/>
        <Aleatorio max={60} min={1}/>
        <Aleatorio max={60} min={1}/>
        <Aleatorio max={60} min={1}/>
        <Aleatorio max={60} min={1}/>
        <Titulo principal="Cadastro de Produto" 
                secundario="Tela de cadastro do produto"/>
        <Botao />
        <Contador inicial={100} passo={6}/>
        <Contador inicial={4} passo={5}/>
        <Contador />
        */}
        

    </SafeAreaView>
    )
    }
