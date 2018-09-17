import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
            <form>
                <input type="text" placeholder="Enter Task">
                </input>
            </form>
            <button type="submit">Add</button>
        </div>
    </div>
    
    );

  }
}

export default InputBox;
