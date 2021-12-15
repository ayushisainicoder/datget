import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Student extends Component{
    // state without Constructor or state Property
    state = {
        id: 1,  
        name: "rohan",
    }
    // Event handler arrow function
    handleClick = (id,e) =>{        
        console.log("Delete id",id);
        console.log(e);      
    }

    // event handler with bind method
    render(){
        return(
            <div>
            <h1>Heyy</h1>
            <button onClick={this.handleClick.bind(this, this.state.id)}>Delete</button>
            </div>
        )
    }


    // event handler with arrow function 
    // render(){
    //     return(
    //         <div>
    //             <h1>Hello </h1>
    //             <button onClick={e =>{this.handleClick(this.state.id,e)}}>Delete</button>
    //         </div>
    //     )
    // }
}

// update state
// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: "Ayyuusshhii",
//             roll: this.props.roll_no,
//         };
//     }
//     handleClick = () => {
//         this.setState({name: "Saini", roll: "102"});
//     }
    // handleClick = () =>{
    //     this.setState((state, props)=>{
    //         console.log(props.roll_no);
    //     });
    // };
//     render(){
//         return(
//             <div>
//             <h1>Helloo World</h1>
//             <h1>Hello, {this.state.name} Your roll number is: {this.state.roll}</h1>
//             <button onClick={this.handleClick}>Click On Me</button>
//             </div>
//         )
//     }
// }

// function component
// function Student(props){
//     function handleClick(e){
//         e.preventDefault();
//         console.log("Button Clicked")
//     }
//     return(
//         <div>
//             <h1>Hello Event {props.name}</h1>
//             <a href="https://www.google.com/" onClick={handleClick}>Click On Me</a>
//         </div>
//     )
// }


// class component
// class Student extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             name: "Ayuuu",
//             roll : this.props.roll_no,
//         }
//     //     this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick = () => {
//         console.log("Button Clicked",this);
//     };

//     render(){
//         return(
//             <div>
//             <h1>Hello Event my name is {this.state.name} and roll no is: {this.state.roll}</h1>
//             <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         )
//     }
// }

//     constructor(props){
//         super(props);
//         this.state = {
//             name : "Aarohi",
//             roll : this.props.roll_no,
//             class : 12
//         }
//     }

//     // use of state
//     // state = {
//     //     name : "Ayuuuu",
//     //     roll : this.props.roll_no,
//     //     class : 11,
//     // }
//     render(){
//         return(
//             <div>
//             <h1>Hello {this.state.name} Your roll no is: {this.state.roll}</h1>
//             <h1>class: {this.state.class}</h1>
//             </div>
//         );
//     }
// }

// const Student = (props) =>{
//     return(
//         <div>
//             <h2>Hello {props.name}</h2>
//             <h2>My roll no: {props.roll_no}</h2>
//         </div>
//     )
// }

// class Student extends Component{
//     render(){
//         return(
//             <div>
//                 {/* <h2>heyyy {this.props.name}</h2>
//                 <h2>Roll No is: {this.props.roll_no}</h2> */}
//                 <h2>Hello Ayushi {this.props.children}</h2>
//             </div>
//         )
//     }
// }

// Student.propTypes = {
//     name: PropTypes.string.isRequired,
//     roll_no: PropTypes.number,
// }

// Student.defaultProps = {
//     name : "Nishhhh"
// }
export default Student;