import React, { Component } from 'react'
import ItemType from '../components/item-type'
import CombinerForm from '../components/combiner-form'
import ItemProperty from '../components/item-property'
import { Tab, Col, ListGroup } from 'react-bootstrap'

export default class Combiner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
        }
        this.resetKey = this.resetKey.bind(this);
    }

    resetKey() {
        //Absolutely neccessary timeout, or else onSelect runs after setKey, causing state.key to become locked to an element no longer in the Tab Container
        setTimeout(() => {
            this.setState({
                key: ''
            })
        })
    }

    render() {
        console.log('rerendered')
        const { elements, removeToProperties, removeToTypes, setResults, setSubmissionMessage} = this.props;
        return (
            <Col className='combiner'>
                <h2>Combiner</h2>
                {!!Object.keys(elements).length &&
                <Tab.Container id="item-property-inputs" activeKey={this.state.key || elements[Object.keys(elements)[0]].id} onSelect={key => this.setState({ key })}>
                    <ListGroup aria-label="combiner-inputs">
                        {Object.keys(elements).map(key => {
                            const element = elements[key];
                            if (element.content.includes('property')) {
                                return <ItemProperty eventKey={element.id} key={element.id} API={element.API} content={element.content} move={this.props.removeToProperties} resetKey={this.resetKey}/>
                            }
                            else {
                                return <ItemType eventKey={element.id} key={element.id} API={element.API} content={element.content} move={this.props.removeToTypes} resetKey={this.resetKey}/>
                            }
                        })}
                    </ListGroup>
                </Tab.Container>}
                {this.props.typeIsSelected && 
                <CombinerForm elements={elements} removeToProperties={removeToProperties} removeToTypes={removeToTypes} setResults={setResults} setSubmissionMessage={setSubmissionMessage}/>}
            </Col>
        )
    }
}