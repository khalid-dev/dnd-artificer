import React, { Component } from 'react'
import ItemProperty from '../components/item-property'
import { Tab, Col, ListGroup } from 'react-bootstrap'

export default class PropertyInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.elements[Object.keys(this.props.elements)[0]].id
        }
        this.setKey = this.setKey.bind(this);
    }
    setKey(val) {
        //Absolutely neccessary timeout, or else onSelect runs after setKey, causing state.key to become locked to an element no longer in the Tab Container
        setTimeout(() => {
            this.setState({
                key: val
            })
        }, 100)
    }
    render() {
        const { elements, moveToCombiner } = this.props;
        return (
            <Tab.Container id="item-property-inputs" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                <Col>
                    <h1> Item Properties </h1>
                    <ListGroup>
                        {Object.keys(elements).map((type, ix) => {
                            const property = elements[type];

                            let adjacentKey = '';
                            const prevEntry = elements[Object.keys(elements)[ix-1]];
                            const nextEntry = elements[Object.keys(elements)[ix+1]];
                            if (prevEntry)
                                adjacentKey = prevEntry.id;
                            if (nextEntry)
                                adjacentKey = nextEntry.id;

                            return <ItemProperty eventKey={property.id} key={property.id} API={property.API} content={property.content} move={moveToCombiner} setKey={this.setKey} adjacentKey={adjacentKey}/>
                        })}
                    </ListGroup>
                </Col>
            </Tab.Container>
        )
    }
}