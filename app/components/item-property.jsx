import React, { Component } from 'react'
import itemTypes from '../constants/item-types'

export default class ItemProperty extends Component {
    generateAPIStringRandom(type) {
        if (itemTypes.armors.includes(type)) {
            return `/api/weak-magical-properties/armor/random/`;
        }
        else if (itemTypes.weapons.includes(type)) {
            return `/api/weak-magical-properties/weapon/random/`;
        }
    }

    render() {
        return (
            <div className="list-group-item">
                This is an Item Property!
            </div>
        )
    }
}