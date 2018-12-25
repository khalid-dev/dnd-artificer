import React, { Component } from 'react'
import ItemProperty from '../components/item-property'
import { Tab, Col, ListGroup } from 'react-bootstrap'

export default class PropertyInputs extends Component {
    render() {
        const { elements, moveToCombiner } = this.props;
        return (
            <Tab.Container id="item-property-inputs" defaultActiveKey={elements[Object.keys(elements)[0]].id}>
                <Col>
                    <h1> Item Properties </h1>
                    <ListGroup>
                        {Object.keys(elements).map(type => {
                            const property = elements[type];
                            return <ItemProperty eventKey={property.id} key={property.id} API={property.API} content={property.content} move={moveToCombiner}/>
                        })}
                    </ListGroup>
                </Col>
            </Tab.Container>
        )
    }
}