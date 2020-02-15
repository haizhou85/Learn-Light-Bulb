import React, { Component } from 'react';
import Switch from './Switch'

class AddRemove extends Component {
    constructor(props){
        super(props)
            this.state = {
                boxList: []
            }
    }
    addBox = () => {
        let newSwitch = [<Switch />]
        this.setState({ boxList: this.state.boxList.concat(newSwitch) })
    }
    deleteBox = () =>{
        let newSwitch = this.state.boxList.slice(1)
        this.setState({ boxList: newSwitch})
    }

    render() {
        let { boxList } = this.state
        return (
            <div>
                <div class = "addRemoveButton">
                    <button class = "addRemove" onClick = { this.addBox }> Add a Switch and Light</button>
                    <button class = "addRemove" onClick = { this.deleteBox }> Delete a Switch and Light</button>
                </div>
                <div class = "theBoxes">
                    <Switch />
                    {boxList}
                </div >
            </div>
        )
    }
}
export default AddRemove;
