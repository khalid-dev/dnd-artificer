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
            <Fade appear={true} in={this.state.selected}>
                <ListGroup.Item 
                    onClick={() => {
                        this.props.setKey(this.props.adjacentKey);
                        this.props.move(this.props.content)}}
                    action
                    eventKey={this.props.eventKey}
                    >
                    {this.props.content}
                </ListGroup.Item>
            </Fade>
        )
    }
}