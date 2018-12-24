import React, { Component } from 'react'
import ItemType from '../components/item-type'
import ItemProperty from '../components/item-property'
import { Col, ListGroup, Form, Button, Fade } from 'react-bootstrap'

export default class Combiner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
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
    
    handleSubmit(evt) {
        evt.preventDefault();
    }

    render() {
        return (
            <Col className='combiner'>
                <h1> Combiner </h1>
                <ListGroup>
                    {Object.keys(this.props.elements).map(key => {
                        const element = this.props.elements[key];
                        if (element.content.includes('property')) {
                            return <ItemProperty key={element.id} API={element.API} content={element.content} move={this.props.removeToProperties}/>
                        }
                        else {
                            return <ItemType key={element.id} API={element.API} content={element.content} move={this.props.removeToTypes}/>
                        }
                    })}
                </ListGroup>
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