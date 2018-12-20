import React, { Component } from 'react'
import ItemType from '../components/item-type'

export default class TypeInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeIsSelected: false
        }
    }
    render() {
        return (
            <div className='combiner'>
                <h1> This is where the Item Types go! </h1>
                {!this.state.typeIsSelected && 
                    <div>
                        <ItemType />
                        <ItemType />
                        <ItemType />
                    </div>}
            </div>
        )
    }
}