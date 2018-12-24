import React, { Component } from 'react'
import ItemType from '../components/item-type'
import ItemProperty from '../components/item-property'

export default class Combiner extends Component {
    render() {
        return (
            <div className='combiner'>
                <h1> This is a Combiner! </h1>
                {Object.keys(this.props.elements).map(key => {
                    const element = this.props.elements[key];
                    if (element.content.includes('property')) {
                        return <ItemProperty key={element.id} API={element.API} content={element.content} move={this.props.removeToProperties}/>
                    }
                    else {
                        return <ItemType key={element.id} API={element.API} content={element.content} move={this.props.removeToTypes}/>
                    }
                })}
            </div>
        )
    }
}