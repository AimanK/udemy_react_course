import React, { Component } from 'react';
import './Message.css'

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome Visitor"
        }
    }


    componentDidUpdate()
    {

    }



    componentWillUnmount()
    {

    }

  render() {
    return (
        <div className = "msg-container">
            <h1>{this.state.message}</h1>
            <button className="msg-btn">Subscribe</button>
        </div>
     )
  }
}

export default Message;
