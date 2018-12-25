import React, { Component } from 'react'
import ItemType from '../components/item-type'
import { Tab, Col, ListGroup } from 'react-bootstrap'

export default class TypeInputs extends Component {

    render() {
        const { elements, moveToCombiner } = this.props;
        return (
            <Tab.Container id="item-type-inputs" defaultActiveKey={elements[Object.keys(elements)[0]].id}>
                <Col>
                    <h1> Item Types </h1>
                    <ListGroup >
                        {Object.keys(this.props.elements).map(type => {
                            const item = this.props.elements[type];
                            return <ItemType eventKey={item.id} key={item.id} API={item.API} content={item.content} move={moveToCombiner}/>
                        })}
                    </ListGroup>
                </Col>
            </Tab.Container>
        )
    }
}