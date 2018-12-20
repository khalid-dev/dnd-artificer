import React, { Component } from 'react'
import Item from '../components/item'

export default class Results extends Component {
    render() {
        return (
            <div className='results'>
                <h1>Results:</h1>
                {this.props.results.forEach(item => <Item />)}
            </div>
        )
    }
}