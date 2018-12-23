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
            <div className="col-6 list-group">
                <h1> Item Types </h1>
                {!this.state.typeIsSelected && 
                    <React.Fragment>
                        {itemTypes.armors.map(armorType => <ItemType key={armorType} type={armorType}/>)}
                        {itemTypes.weapons.map(weaponType => <ItemType key={weaponType} type={weaponType}/>)}
                        {itemTypes.trinkets.map(trinketType => <ItemType key={trinketType} type={trinketType}/>)}
                    </React.Fragment>}
            </div>
        )
    }
}