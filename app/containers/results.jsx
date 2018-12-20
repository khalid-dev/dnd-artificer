import React, { Component } from 'react'
import Item from '../components/item'

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [] || props.items[0]
        }
    }

    render() {
        return (
            <div className='results'>
                <h1>Results:</h1>
                {this.state.items.forEach(item => <Item />)}
            </div>
        )
    }
}