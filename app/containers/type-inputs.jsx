import React, { Component } from 'react'
import ItemType from '../components/item-type'

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
                        {Object.keys(this.props.elements).map(type => {
                            const item = this.props.elements[type];
                            return <ItemType key={item.id} API={item.API} content={item.content}/>
                        })}
                    </React.Fragment>}
            </div>
        )
    }
}