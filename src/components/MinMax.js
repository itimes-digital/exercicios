import { Text } from 'react-native'
import Estilo from './styleComponent'
export default (props) => (
    <Text style={Estilo.FontG}>O valor {props.max} é maior do que {props.min}. E a soma deles terá o total de {props.max + props.min}.</Text>
)