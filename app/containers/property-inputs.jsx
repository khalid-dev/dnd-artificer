import React, { Component } from 'react'
import ItemProperty from '../components/item-property'

export default class PropertyInputs extends Component {
    render() {
        return (
            <div className="col-6 list-group">
                <h1> Item Properties </h1>
                <React.Fragment>
                    {Object.keys(this.props.elements).map(type => {
                        const property = this.props.elements[type];
                        return <ItemProperty key={property.id} API={property.API} content={property.content} move={this.props.moveToCombiner}/>
                    })}
                </React.Fragment>
            </div>
        )
    }
}