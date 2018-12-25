import React, { Component } from 'react'
import ItemProperty from '../components/item-property'
import { Col, ListGroup } from 'react-bootstrap'

export default class PropertyInputs extends Component {
    render() {
        const { elements, moveToCombiner } = this.props;
        return (
            <Col>
                <h1> Item Properties </h1>
                <ListGroup>
                    {Object.keys(elements).map(type => {
                        const property = elements[type];
                        return <ItemProperty eventKey={property.id} key={property.id} API={property.API} content={property.content} move={moveToCombiner}/>
                    })}
                </ListGroup>
            </Col>
        )
    }
}