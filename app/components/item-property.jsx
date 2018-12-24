import React, { Component } from 'react'
import { Fade, ListGroup } from 'react-bootstrap'

export default class ItemProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true
        }
    }

    render() {
        return (
            <Fade appear={true} in={this.state.selected} duration="1000">
                <ListGroup.Item onClick={() => {this.props.move(this.props.content)}}>
                    {this.props.content}
                </ListGroup.Item>
            </Fade>
        )
    }
}