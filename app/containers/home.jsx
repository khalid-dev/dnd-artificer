import React, { Component } from 'react'
import Results from './results'
import Combiner from './combiner'
import TypeInputs from './type-inputs'
import PropertyInputs from './property-inputs'
import itemTypes from '../constants/item-types'
import itemProperties from '../constants/item-properties'
import { Alert, Container, Row } from 'react-bootstrap'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeInputs: itemTypes,
            propertyInputs: itemProperties,
            combinerInputs: {},
            results: [],
            typeIsSelected: false,
            typeError: '',
            submissionMessage: '',
        }
        this.moveToCombinerFromTypes = this.moveToCombinerFromTypes.bind(this);
        this.moveToCombinerFromProperties = this.moveToCombinerFromProperties.bind(this);
        this.removeFromCombinerToTypes = this.removeFromCombinerToTypes.bind(this);
        this.removeFromCombinerToProperties = this.removeFromCombinerToProperties.bind(this);
        this.resetError = this.resetError.bind(this);
        this.setSubmissionMessage = this.setSubmissionMessage.bind(this);
        this.setResults = this.setResults.bind(this);
    }

    moveToCombinerFromTypes(elementName) {
        //if/else and return true to limit item types to 1--not necc for other inputs
        if (!this.state.typeIsSelected) {
            const newTypeInputs = this.state.typeInputs;
            const elementInfo = newTypeInputs[elementName];
            delete newTypeInputs[elementName];
            const newCombinerInputs = this.state.combinerInputs;
            newCombinerInputs[elementName] = elementInfo;
            this.setState({
                typeInputs: newTypeInputs,
                combinerInputs: newCombinerInputs,
                typeIsSelected: !this.state.typeIsSelected
            })
            return true
        }
        else {
            this.setState({
                typeError: 'Only one Item Type in the Combiner, please!'
            });
        }
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
            combinerInputs: newCombinerInputs,
            typeIsSelected: !this.state.typeIsSelected
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

    resetError() {
        this.setState({
            error: ''
        })
    }

    setSubmissionMessage(message) {
        this.setState({
            submissionMessage: message
        })
    }

    setResults(results) {
        this.setState({
            results
        })
    }

    render() {
        const { typeError, submissionMessage, typeInputs, propertyInputs, combinerInputs, typeIsSelected } = this.state;
        return (
            <Container className="home">
                <h1>Welcome to Artificer!</h1>
                {typeError && 
                <Alert show={!!typeError} variant="primary" dismissible={true} onClose={() => this.resetError()}>
                    <Alert.Heading>{typeError}</Alert.Heading>
                </Alert>}
                {submissionMessage &&
                <Alert show={!!submissionMessage} variant="success" dismissible={true} onClose={() => this.setSubmissionMessage('')}>
                    <Alert.Heading>{submissionMessage}</Alert.Heading>
                </Alert>}
                <Row>
                    <TypeInputs elements={typeInputs} moveToCombiner={this.moveToCombinerFromTypes}/>
                    <PropertyInputs elements={propertyInputs} moveToCombiner={this.moveToCombinerFromProperties}/>
                    <Combiner elements={combinerInputs} removeToTypes={this.removeFromCombinerToTypes} removeToProperties={this.removeFromCombinerToProperties} typeIsSelected={typeIsSelected} setResults={this.setResults} setSubmissionMessage={this.setSubmissionMessage}/>
                </Row>
                <Results elements={this.state.results} />
            </Container>
        )
    }
}