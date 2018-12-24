import React, { Component } from 'react'
import ItemProperty from '../components/item-property'
import { Col, ListGroup } from 'react-bootstrap'

export default class PropertyInputs extends Component {
    render() {
        return (
            <Col>
                <h1> Item Properties </h1>
                <ListGroup>
                    {Object.keys(this.props.elements).map(type => {
                        const property = this.props.elements[type];
                        return <ItemProperty key={property.id} API={property.API} content={property.content} move={this.props.moveToCombiner}/>
                    })}
                </ListGroup>
            </Col>
        )
    }
}