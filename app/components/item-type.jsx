import React, { Component } from 'react'
import { Fade, ListGroup } from 'react-bootstrap'

export default class ItemType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true
        }
    }
    generateAPIString() {
        return `/api/${this.props.API}/`;
    }

    generateAPIStringRandom() {
        return `/api/${this.props.API}/random/`;
    }

    render() {
        return (
            <Fade appear={true} in={this.state.selected}>
                <ListGroup.Item onClick={() => {
                    if (this.props.move(this.props.content)) {
                        this.setState({selected: !this.state.selected});
                    }}}>
                    {this.props.content}
                </ListGroup.Item>
            </Fade>
        )
    }
}