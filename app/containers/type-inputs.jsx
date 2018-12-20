import React, { Component } from 'react'
import ItemType from '../components/item-type'
import itemTypes from '../constants/item-types'

export default class TypeInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeIsSelected: false
        }
    }
    render() {
        return (
            <div className='combiner'>
                <h1> This is where the Item Types go! </h1>
                {!this.state.typeIsSelected && 
                    <div>
                        <div className='armors'>
                            ARMORS
                            {itemTypes.armors.map(armorType => <ItemType key={armorType} type={armorType}/>)}
                        </div>
                        <div className='weapons'>
                            WEAPONS
                            {itemTypes.weapons.map(weaponType => <ItemType key={weaponType} type={weaponType}/>)}
                        </div>
                    </div>}
            </div>
        )
    }
}