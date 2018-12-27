import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Fade } from 'react-bootstrap'

export default class CombinerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const { setResults, elements, setSubmissionMessage } = this.props;
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
        
        this.setState({
            value: ''
        })
        setResults(results);
        this.resetElements();
        setSubmissionMessage('Items Generated!')
    }
    render() {
        return (
            <Fade in={true}>
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group controlId="formBasicNumber" >
                            <Form.Label srOnly="Enter the number of items to be generated between 1 and 100">Enter the number of items to be generated between 0 and 100</Form.Label>
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
                </Fade>
        )
    }
}