import React, { Component } from 'react'
import { Fade, ListGroup } from 'react-bootstrap'

export default class ItemProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true
        }
    }
    //Write a test for this to ensure that it only works on armor, weapon, and trinket
    generateAPIStringRandom(type) {
        switch(type) {
            case 'armor':
                return `/api/${this.props.API}/armors/random/`;
            case 'weapon':
                return `/api/${this.props.API}/weapons/random`;
            case 'trinket':
                return `/api/${this.props.API}/trinkets/random`;
        }
    }

    render() {
        return (
            <Fade appear={true} in={this.state.selected}>
                <ListGroup.Item onClick={() => {this.props.move(this.props.content)}}>
                    {this.props.content}
                </ListGroup.Item>
            </Fade>
        )
    }
}