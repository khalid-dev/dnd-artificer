import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'

export default class DismissibleError extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Alert variant="primary">
                {this.props.message}
                <Button onClick={() => this.props.resetError()}>
                    X
                </Button>
            </Alert>
        )
    }
}