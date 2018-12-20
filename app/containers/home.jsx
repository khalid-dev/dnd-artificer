import React, { Component } from 'react'
import Results from './results'
import Combiner from './combiner'
import TypeInputs from './type-inputs'
import PropertyInputs from './property-inputs'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }
    render() {
        return (
            <div className='home'>
                <h1>Welcome to Artificer!</h1>
                <TypeInputs />
                <PropertyInputs />
                <Combiner />
                <Results results={this.state.results}/>
            </div>
        )
    }
}