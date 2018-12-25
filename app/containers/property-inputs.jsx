import React, { Component } from 'react'
import ItemProperty from '../components/item-property'
import { Tab, Col, ListGroup } from 'react-bootstrap'

export default class PropertyInputs extends Component {
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
                key: val
            })
        }, 100)
    }
    render() {
        const { elements, moveToCombiner } = this.props;
        return (
            <Tab.Container id="item-property-inputs" activeKey={this.state.key || this.props.elements[Object.keys(this.props.elements)[0]].id} onSelect={key => this.setState({ key })}>
                <Col>
                    <h1> Item Properties </h1>
                    <ListGroup>
                        {Object.keys(elements).map((type, ix) => {
                            const property = elements[type];

                            return <ItemProperty eventKey={property.id} key={property.id} API={property.API} content={property.content} move={moveToCombiner} resetKey={this.resetKey}/>
                        })}
                    </ListGroup>
                </Col>
            </Tab.Container>
        )
    }
}