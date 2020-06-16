// JavaScript source code
import React from 'react';
import ReactDOM from 'react-dom';
import './profile.css';


class MyVertical extends React.Component {
constructor(props) {
    super(props);
    }
    render() {
    return (
    <ab>
    <p className = "op1">Profile </p>
    <p className= "op2">settings </p>
    <p className= "op2">Notifications</p>
    <p className = "op1">Task</p>
    <p className= "op3">Task1</p>
    <p className= "op3">Task2</p>
    </ab>

    )
   }
}

ReactDOM.render(<MyVertical />, document.getElementById('vertical_bar'));


