import React from 'react';
import ReactDOM from 'react-dom';
import './profile.css';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.state = { date: '' };
    this.state = { profession: '' };
    this.state = { designation: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  myChangeHandler2 = (event) => {
    this.setState({date: event.target.value});
  }
  myChangeHandler3 = (event) => {
    this.setState({profession: event.target.value});
  }
  myChangeHandler4 = (event) => {
    this.setState({deisgnation: event.target.value});
  }

  render() {
    let header = this.state.username;
    let dob = this.state.date;
    let pro = this.state.profession;
    let desg = this.state.designation;
   
         
    return (
       <div className = "form">
       <pb1>Profile</pb1>
      <form className = "fbox">
       
       <pb>Name:     </pb>
       <input className= "box1"
         type='text'
         onChange={this.myChangeHandler}
       />
       <br/>
       <pb>DOB:</pb>
       <input className= "box2"
         type='date'
         onChange={this.myChangeHandler2}
        />
        <br/>
        <pb>Profession:</pb>
       <input className= "box3"
         type='text'
         onChange={this.myChangeHandler3}
        />
        <br/>
       <pb>Designation:</pb>
       <input className= "box4"
        type='text'
        onChange={this.myChangeHandler4}
       />
       <br/><br/>
       </form>
       <button  type = 'button' className= "bt1"> Cancel </button>
       <button  type = 'button' className= "bt2"> Submit</button>
       
      </div>
    );
  }
}





ReactDOM.render(<MyForm /> ,  document.getElementById('form'),  );







     
