import React, { Component } from 'react'

export default class ItemType extends Component {
    generateAPIString() {
        return `/api/${this.props.type}/`;
    }

    generateAPIStringRandom() {
        return `/api/${this.props.type}/random/`;
    }

    render() {
        return (
            <div className="list-group-item">
                {this.props.type}
            </div>
        )
    }
}