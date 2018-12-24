import React, { Component } from 'react'
import ItemType from '../components/item-type'
import { Col, ListGroup } from 'react-bootstrap'

export default class TypeInputs extends Component {

    render() {
        return (
            <Col>
                <h1> Item Types </h1>
                <ListGroup >
                    {Object.keys(this.props.elements).map(type => {
                        const item = this.props.elements[type];
                        return <ItemType key={item.id} API={item.API} content={item.content} move={this.props.moveToCombiner}/>
                    })}
                </ListGroup>
            </Col>
        )
    }
}