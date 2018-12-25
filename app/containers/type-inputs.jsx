import React, { Component } from 'react'
import ItemType from '../components/item-type'
import { Col, ListGroup } from 'react-bootstrap'

export default class TypeInputs extends Component {

    render() {
        const { elements, moveToCombiner } = this.props;
        return (
            <Col>
                <h1> Item Types </h1>
                <ListGroup>
                    {Object.keys(elements).map(type => {
                        const item = elements[type];
                        return <ItemType eventKey={item.id} key={item.id} API={item.API} content={item.content} move={moveToCombiner}/>
                    })}
                </ListGroup>
            </Col>
        )
    }
}