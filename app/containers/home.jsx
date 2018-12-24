import React, { Component } from 'react'
import Results from './results'
import Combiner from './combiner'
import TypeInputs from './type-inputs'
import PropertyInputs from './property-inputs'
import itemTypes from '../constants/item-types'
import itemProperties from '../constants/item-properties'
import { Container, Row } from 'react-bootstrap'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeInputs: itemTypes,
            propertyInputs: itemProperties,
            combinerInputs: {},
            results: []
        }
        this.moveToCombinerFromTypes = this.moveToCombinerFromTypes.bind(this);
        this.moveToCombinerFromProperties = this.moveToCombinerFromProperties.bind(this);
        this.removeFromCombinerToTypes = this.removeFromCombinerToTypes.bind(this);
        this.removeFromCombinerToProperties = this.removeFromCombinerToProperties.bind(this);
    }

    moveToCombinerFromTypes(elementName) {
        const newTypeInputs = this.state.typeInputs;
        const elementInfo = newTypeInputs[elementName];
        delete newTypeInputs[elementName];
        const newCombinerInputs = this.state.combinerInputs;
        newCombinerInputs[elementName] = elementInfo;
        this.setState({
            typeInputs: newTypeInputs,
            combinerInputs: newCombinerInputs
        })
    }

    moveToCombinerFromProperties(elementName) {
        const newPropertyInputs = this.state.propertyInputs;
        const elementInfo = newPropertyInputs[elementName];
        delete newPropertyInputs[elementName];
        const newCombinerInputs = this.state.combinerInputs;
        newCombinerInputs[elementName] = elementInfo;
        this.setState({
            propertyInputs: newPropertyInputs,
            combinerInputs: newCombinerInputs
        })
    }

    removeFromCombinerToTypes(elementName) {
        const newCombinerInputs = this.state.combinerInputs;
        const elementInfo = newCombinerInputs[elementName];
        delete newCombinerInputs[elementName];
        const newTypeInputs = this.state.typeInputs;
        newTypeInputs[elementName] = elementInfo;
        this.setState({
            typeInputs: newTypeInputs,
            combinerInputs: newCombinerInputs
        })
    }

    removeFromCombinerToProperties(elementName) {
        const newCombinerInputs = this.state.combinerInputs;
        const elementInfo = newCombinerInputs[elementName];
        delete newCombinerInputs[elementName];
        const newPropertyInputs = this.state.propertyInputs;
        newPropertyInputs[elementName] = elementInfo;
        this.setState({
            propertyInputs: newPropertyInputs,
            combinerInputs: newCombinerInputs
        })
    }

    render() {
        return (
            <Container className="home">
                <h1>Welcome to Artificer!</h1>
                <Row>
                    <TypeInputs elements={this.state.typeInputs} moveToCombiner={this.moveToCombinerFromTypes}/>
                    <Combiner elements={this.state.combinerInputs} removeToTypes={this.removeFromCombinerToTypes} removeToProperties={this.removeFromCombinerToProperties}/>
                    <PropertyInputs elements={this.state.propertyInputs} moveToCombiner={this.moveToCombinerFromProperties}/>
                </Row>
                <Results elements={this.state.results} />
            </Container>
        )
    }
}