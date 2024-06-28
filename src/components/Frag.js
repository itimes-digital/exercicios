import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => (
    /**<> é React.Fragment */
    <>
        <Text style={Estilo.FontG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
)