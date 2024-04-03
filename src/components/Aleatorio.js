import React from 'react-native'
import {Text} from 'react-native'
import Estilo from './styleComponent'

export default (props) => {

    const {max, min} = props;
    let result = Math.floor(Math.random() * (max - min + 1) + min)
    setTimeout(() => result = Math.floor(Math.random() * (max - min + 1) + min), 5000);
    return (
        <Text style={Estilo.FontG}>O valor entre {props.min} e {props.max} é: {result}</Text>
    )
    }