import React from 'react'

function FunctionClick() {
    function clicked() {
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clicked}>Click</button>
        </div>
    )
}

export default FunctionClick