import React, { Component } from 'react'
import ItemProperty from '../components/item-property'

export default class PropertyInputs extends Component {
    render() {
        return (
            <div className="col-6 list-group">
                <h1> Item Properties </h1>
                <div>
                    <ItemProperty />
                    <ItemProperty />
                </div>
            </div>
        )
    }
}