import React, { Component } from 'react'
import ItemType from '../components/item-type'
import { Tab, Col, ListGroup } from 'react-bootstrap'

export default class TypeInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: ''
        }
        this.resetKey = this.resetKey.bind(this);
    }
    resetKey(val) {
        //Absolutely neccessary timeout, or else onSelect runs after resetKey, causing state.key to become locked to an element no longer in the Tab Container
        setTimeout(() => {
            this.setState({
                key: ''
            })
        })
    }

    render() {
        const { elements, moveToCombiner } = this.props;
        return (
            <Tab.Container id="item-type-inputs" activeKey={this.state.key || elements[Object.keys(elements)[0]].id} onSelect={key => this.setState({ key })}>
                <Col>
                    <h2> Item Types </h2>
                    <ListGroup aria-label="item-types">
                        {Object.keys(elements).map(type => {
                            const item = elements[type];
                            return <ItemType eventKey={item.id} key={item.id} API={item.API} content={item.content} move={moveToCombiner} resetKey={this.resetKey}/>
                        })}
                    </ListGroup>
                </Col>
            </Tab.Container>
        )
    }
}