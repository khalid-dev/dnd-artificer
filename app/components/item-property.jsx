import React, { Component } from 'react'

export default class ItemProperty extends Component {
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
            <div className="list-group-item" onClick={() => {this.props.moveToCombiner(this.props.content)}}>
                {this.props.content}
            </div>
        )
    }
}