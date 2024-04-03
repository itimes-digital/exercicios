import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './styleComponent'

export default ({ inicial = 0, passo = 1}) =>{
    const [numero, setNumero] = useState(inicial);

    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)

    return (
        <React.Fragment>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </React.Fragment>
    )
}