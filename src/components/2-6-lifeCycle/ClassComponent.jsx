import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {date: new Date()};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick() , 10000);

    }

    componentDidUpdate() {}

    componentWillUnmount() {

        clearInterval(this.timerID)
    }

    tick() {
        this.setState({date: new Date()});
    }

    handleClick() {
        alert(this.state.date)
    }


  render() {
    return (
      <>
      
      <div onClick={this.handleClick}>ClassComponent2 </div>
      <p>{this.state.date.toLocaleTimeString()}</p></>
    )
  }
}
