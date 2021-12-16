import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

export default class Custom extends Component{
    render(){
        const primeMember = this.props.primeMember;
        return(
            <>
            <h1>Welcome User</h1>
            {primeMember && < User/>}
            </>
        )
    }
}

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