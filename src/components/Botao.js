import React from 'react'
import { Button} from 'react-native'

export default props => {
    let count = 0;
    function facaAlgumaCoisa(){
        count += 1;
        console.warn(count);
    }
    return (
        <React.Fragment>
            <Button title='Execute #01'
                    onPress={facaAlgumaCoisa}/>
            
            <Button title='Execute #02'
                    onPress={function (){
                        console.warn('execute #02')
                    }}/>
            <Button title='Execute #03'
                    onPress={() => {
                        count += 1;
                        console.warn(count);
                    }}/>
        </React.Fragment>
    )
}