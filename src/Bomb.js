// your Bomb code here!
import React from "react"

export default class Bomb extends React.Component{
  constructor(props){
    super()
    this.state={
      secondsLeft:this.props.initialCount
    }
  }
  render(){
    return (
      
      {this.state.secondsLeft===0 ? 'Boom!':this.state.secondsLeft 'seconds left beforeI go boom!'} 
      
      )
  }
}