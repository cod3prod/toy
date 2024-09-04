import React from 'react'

function ColorInput() {
    return (
        <form onSubmit={(e) => { e.preventDefault() }}>
            <label for='input-color'>Pick your color.</label>
            <input type='color' name='input-color' id='input-color' />
        </form>
    )
}

export default function ColorSelector() {
    return (
        <div id='color-selector'>
            <ColorInput />
        </div>
    )
}