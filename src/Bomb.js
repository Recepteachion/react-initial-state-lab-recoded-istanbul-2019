// your Bomb code here!
import React from "react"

export default class Bomb extends React.Component{
  constructor(props){
    super()
    this.state={
      secondLeft:this.props.initialCount
    }
  }
  render(){
    return (
      
      {this.state.secondLeft===0 ? 'Boom!':this.state.secondLeft 'seconds left before I go boom!'} 
      
      )
  }
}