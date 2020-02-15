import React, { Component } from 'react';
import on from './on.png'
import off from './off.png'
import lightOn from './lighton.png'
import lightOff from './lightoff.png'
class Switch extends Component{
    constructor(props){
        super(props)
            this.state = {
                onOff : off,
                light : lightOff
            }
    }
    clickSwitch = () =>{
        if (this.state.onOff === off) {
            return this.setState({ onOff : on , light : lightOn})
        } else{
            return this.setState({ onOff : off, light : lightOff })
        }
    }
    render(){
        let { onOff } = this.state
        let { light } = this.state
        return(
            <table>
            <tr>
                <td>
                    <img onClick = { this.clickSwitch } src = { onOff }/>
                </td>
                <td>
                <img onClick = { this.clickSwitch } src = { light }/>
                </td>
                </tr>
            </table>
        )
    }
}
export default Switch
