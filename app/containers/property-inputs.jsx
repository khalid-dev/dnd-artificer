import React, { Component } from 'react'
import ItemProperty from '../components/item-property'

export default class PropertyInputs extends Component {
    render() {
        return (
            <div className='combiner'>
                <h1> This is where the Item Properties go! </h1>
                <div>
                    <ItemProperty />
                    <ItemProperty />
                </div>
            </div>
        )
    }
}