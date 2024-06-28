import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from '../estilo'
import produtos from './Produtos'

export default props => {

    const produtoRender = ({ item: p}) => {
        return <Text>{p.id}) {p.nome}</Text>
    }

    return (
        <>
            <Text style={Estilo.txtG}>
               Lista de Produtos V2
            </Text>
            <FlatList 
                keyExtractor={i => `${i.id}`}
                data={produtos}
                renderItem={produtoRender}
            />
        </>
    )
}