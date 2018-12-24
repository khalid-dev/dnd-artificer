import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

export default class ItemType extends Component {
    generateAPIString() {
        return `/api/${this.props.API}/`;
    }

    generateAPIStringRandom() {
        return `/api/${this.props.API}/random/`;
    }

    render() {
        return (
            <ListGroup.Item onClick={() => {this.props.move(this.props.content)}}>
                {this.props.content}
            </ListGroup.Item>
        )
    }
}