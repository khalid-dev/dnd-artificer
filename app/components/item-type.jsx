import React, { Component } from 'react'

export default class ItemType extends Component {
    generateAPIString() {
        return `/api/${this.props.API}/`;
    }

    generateAPIStringRandom() {
        return `/api/${this.props.API}/random/`;
    }

    render() {
        return (
            <div className="list-group-item">
                {this.props.content}
            </div>
        )
    }
}