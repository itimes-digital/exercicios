import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

export default () => {
    return <Text style={Estilo.Back}>Comp #1 - Oficial</Text>
}

export function Comp2 (){
    return <Text style={Estilo.FontG}>Comp #2</Text>
}

export function Comp3 (){
    return <Text style={Estilo.FontG}>Comp #3</Text>
}