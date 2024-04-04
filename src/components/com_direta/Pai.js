import React from 'react'

import Filho from './Filho'

export default props => {
    let x = 15;
    let y = 101;

    return (
        <>
            <Filho a={x} b={y}></Filho>
            <Filho a={x + 50} b={y + 150}></Filho>
        </>
    )
}