import React, { Component } from 'react'
import ItemType from '../components/item-type'
import ItemProperty from '../components/item-property'
import { Tab, Col, ListGroup, Form, Button, Fade } from 'react-bootstrap'
import axios from 'axios'

export default class Combiner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            key: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    getValidationState() {
        if (typeof this.state.value !== "number")
            return 'warning'
        else if (this.state.value <= 0)
            return 'error'
        else if (this.state.value > 0)
            return 'success'
        return null
    }

    handleChange(evt) {
        this.setState({ value: evt.target.value})
    }
    
    generateAPIStringRandom(APIStr, num) {
        return `/api/${APIStr}/random/${num}`;
    }
    generatePropertyAPIStringRandom(type, APIStr, num) {
        switch(type) {
            case 'armor':
                return `/api/${APIStr}/armors/random/${num}`;
            case 'weapon':
                return `/api/${APIStr}/weapons/random/${num}`;
            case 'trinket':
                return `/api/${APIStr}/trinkets/random/${num}`;
        }
    }

    resetElements() {
        const { elements, removeToProperties, removeToTypes } = this.props;
        Object.keys(elements).forEach(key => {
            if (key.includes('property')) {
                removeToProperties(key);
            }
            else {
                removeToTypes(key);
            }
        })
    }

    async handleSubmit(evt) {
        evt.preventDefault();
        const results = [];
        const { elements } = this.props;
        const keys = Object.keys(elements);
        let type;
        let properties = [];
        keys.forEach(key => {
            if (key.includes('property')) {
                properties.push(elements[key])
            }
            else
                type = elements[key]
        })
        const typeAPI = this.generateAPIStringRandom(type.API, this.state.value);
        
        const items = await axios.get(typeAPI);
        items.data.forEach(item => results.push(item));

        let typeStr;
        if (type.API.includes('armor')) {
            typeStr = 'armor'
        }
        if (type.API.includes('weapon')) {
            typeStr = 'weapon'
        }
        if (type.API.includes('trinket')) {
            typeStr = 'trinket'
        }
        const propertyAPIs = properties.map(property => this.generatePropertyAPIStringRandom(typeStr, property.API, this.state.value));
        
        for (let i = 0; i < propertyAPIs.length; i ++) {
            const properties = await axios.get(propertyAPIs[i]);
            results.forEach((result, resultIx) => {
                result[`property-${i+1}`] = properties.data[resultIx]
            });
        }

        this.props.setResults(results);
        this.resetElements();
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <Col className='combiner'>
                <h1> Combiner </h1>
                {!!Object.keys(this.props.elements).length &&
                <Tab.Container id="item-property-inputs" activeKey={this.state.key || this.props.elements[Object.keys(this.props.elements)[0]].id} onSelect={key => this.setState({ key })}>
                    <ListGroup>
                        {Object.keys(this.props.elements).map(key => {
                            const element = this.props.elements[key];
                            if (element.content.includes('property')) {
                                return <ItemProperty eventKey={element.id} key={element.id} API={element.API} content={element.content} move={this.props.removeToProperties} setKey={this.setKey}/>
                            }
                            else {
                                return <ItemType eventKey={element.id} key={element.id} API={element.API} content={element.content} move={this.props.removeToTypes} setKey={this.setKey}/>
                            }
                        })}
                    </ListGroup>
                </Tab.Container>}
                {this.props.typeIsSelected && 
                <Fade in={true}>
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group controlId="formBasicNumber" >
                            <Form.Label>Enter the number of items between 0 and 100</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                max="100"
                                step="1"
                                required={true}
                                value={this.state.value}
                                placeholder="Enter number"
                                onChange={this.handleChange}
                            />
                            <Button type="submit">Submit form</Button>
                        </Form.Group>
                    </Form>
                </Fade>}
            </Col>
        )
    }
}