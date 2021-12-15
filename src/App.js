import './App.css';
import Carts from './components/Carts';
import Userdetail from './components/Userdetail';
import Learning from './components/Learning';
import Student from './components/Student';
import React, { Component } from 'react'
import Learn from './components/Learn';

export default class App extends Component {
  
  render() {
    console.log("Main App Rendered")
    return (
      
      <div>
        
        <Learn name="I_am_Learn_prop"/>
        {/* <Student roll_no={106} /> */}
        {/* for function component */}
        {/* <Student name="niaaa"/> */}

        {/* for class component */}
        {/* <Student roll_no = {123}/> */}

        {/* <Student roll_no={101}/> */}

        {/* <Student name="Ayuusshhhiii" roll_no={100+2} />, */}
        {/* <Student>I am child</Student> */}
        
        {/* <Learning />  */}
        {/* <Learning name="Nehaa"/> 
        <Learning name="Parul" /> */}
      </div>
      
      
        
          
    );
  }
}