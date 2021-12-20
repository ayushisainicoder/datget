import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

export default class Custom extends Component{
  render(){
    return(
      <>
     
      </>
    )
  }
}

// external css
// export default class Custom extends Component{
//   render(){
//     return(
//       <>
//       <h1 className={this.props.color}>Hello Custom</h1>
//       </>
//     )
//   }
// }

// inline css
// export default class Custom extends Component{
//   state = {
//     change:false
//   };
//   clickHandle = () => {
//     this.setState({change: true})
//   };
//    render(){
//       const btnStyle = {
//         color: "black",
//         backgroundColor: "orange",
//       };
//       if ( this.state.change) {
//         btnStyle.backgroundColor = "White"
//       }
       
//       return(
//         <>
//         <button onClick={this.clickHandle} style={btnStyle}>Click Me</button>
//         </>
//       )
//     }
//   }

// inline css
// export default class Custom extends Component{
//   render(){
//     const txtc = {
//       color: "green"
//     }
//     return(
//       <h1 style={{...txtc, ...{fontSize: "120px"}}}>Hello World</h1>
//     )
//   }
// }

// inline css // ...value is a spread operator
// export default class Custom extends Component{
//   render(){
//     const txtc = {
//       color : "orange",
//     }
//     const txts = {
//       fontSize : "80px"
//     }
//     return(
//       <h1 style={{...txtc, ...txts}}>Hello Custom App</h1>
//     )
//   }
// }
// 

// inline css
// export default class Custom extends Component{
//   render(){
//     const btnStyle = {
//       color: "black",
//       backgroundColor: "orange",
//     };
//     return(
//       <>
//       <button style={btnStyle}>Click Me</button>
//       </>
//     )
//   }
// }

// key in react
// export default class Custom extends Component{
//   render(){
//     const arr = this.props.numbers;
//     const newArr = arr.map(num => {
//       return <User key={num} value={num} />;
//     });
//     return(
//       <div>
//         <ul>{newArr}</ul>     
//       </div>
//     )
//   }
// }

// export default class Custom extends Component{
//     render(){
//     const arr = this.props.numbers;
//       return(
//         <ul>
//         {/* {arr.map(num =>{
//           return <li>{num}</li>;
//         })} */} 
//           {arr.map(num => <li>{num}</li>)}
//         </ul>
//       )
//     }
//   }

// IIFE statement
// export default class Custom extends Component{
//     state = {
//         isLoggedIn : false
//     }

//     clickLogin = () =>{
//         this.setState({isLoggedIn : true});
//     };

//     clickLogout = () => {
//         this.setState({isLoggedIn : false});
//     };

//     render(){
//         const isLoggedIn = this.state.isLoggedIn;
//         return(
//             <div>
//                 {(() => {
//                     if(isLoggedIn){
//                         return <User clickData={this.clickLogout} />;
//                 } else {
//                     return <Guest clickData={this.clickLogin} />;
//                 }
//                 })()}
//             </div>
//         );
// }
// }


// if else inline statement
// export default class Custom extends Component{
//     state = {
//         isLoggedIn : false
//     }

//     clickLogin = () =>{
//         this.setState({isLoggedIn : true});
//     };

//     clickLogout = () => {
//         this.setState({isLoggedIn : false});
//     };

//     render(){
//         const isLoggedIn = this.state.isLoggedIn;
//         return(
//             <>
//             {isLoggedIn ? <User clickData= {this.clickLogout}/> : <Guest clickData = {this.clickLogin}/>}
//             </>
//         )
//     }
// }

// if else statement
// export default class Custom extends Component{
//     state = {
//         isLoggedIn: false
//     }

//     clickLogin = () =>{
//         this.setState({isLoggedIn : true});
//     }

//     clickLogout = () =>{
//         this.setState({isLoggedIn : false});
//     }
//     render(){
//         const isLoggedIn = this.state.isLoggedIn;
//         let consumer;
//         if(isLoggedIn){
//             consumer = <User clickData = {this.clickLogout}/>;
//         } else{
//             consumer = <Guest clickData = {this.clickLogin}/>;
//         }
//         return(
//             <div>{consumer}</div>
//         )
        
//     }
// }

// using inline if
// export default class Custom extends Component{
//     render(){
//         const primeMember = this.props.primeMember;
//         return(
//             <>
//             <h1>Welcome User</h1>
//             {/* inline if */}
//             {primeMember && <User />}
//             </>
//         )
//     }
// }

// if statement
// export default class Custom extends Component {
//     render() {
//         const isRegister = this.props.consumer;
//         if(isRegister){
//             return <User/>;
//         } 
//         return <Guest/>;
//     }
// }


// custom hook
// import { useState } from "react";

// function useCostomCounter(){
//     const [count, setCount] = useState(0);
//     const handleIncrement =()=>{
//         setCount(count + 1);
//     };
//     return{
//         count,
//         handleIncrement
//     }   
// }
// export default useCostomCounter;