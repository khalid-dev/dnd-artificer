import React, { Component } from 'react'
import { Fade, Button } from 'react-bootstrap'

export default class TestProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true
        }
    }

    render() {
        return (
            <Fade appear={true} in={this.state.selected}>
                <Button
                    onClick={() => {
                        this.props.move(this.props.content);
                        }}
                    variant="outline-primary">
                    {this.props.content}
                </Button>
            </Fade>
        )
    }
}