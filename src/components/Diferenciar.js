import React from 'react'
import { Text, Platform, View } from 'react-native'
import Estilo from './estilo'

export default _ => {
            return <View>
                    <Text style={Estilo.txtG}>Você está executando no device: </Text>
                        {Platform.OS === 'ios' 
                            ? <Text style={Estilo.txtG}>iOS</Text> 
                            : null}
                </View>
}