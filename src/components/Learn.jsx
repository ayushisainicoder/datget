import React, { Component } from 'react'
import Employee from './Employee'

export default class Learn extends Component{
    constructor(){
        super();
        this.state = {
            id : 101
        };
    }
    clickHandle=(id)=>{
        console.log("Button clicked");
        // this.setState({id:501});
        this.setState({ id: this.state.id + 2 });
        
    };
    render(){
        console.log("Learn Rendering");
        return(
            <div>
                <Employee id={this.state.id}/>
                <button onClick ={this.clickHandle}>Change</button>
            </div>
        );
    }
}


// export default class Learn extends Component {
//     // mounting
//     constructor(props){
//         super(props);
//         console.log("Learn- Constructor called");
//         console.log(props);
//         this.state = {
//             roll: "101"
//         }
//       }

//       static getDerivedStateFromProps(props,state){
//         console.log("Learn - Get derived state from props");
//         console.log(props,state);
//         return null;
//       }

//       componentDidMount(){
//         //   data get from server and set the data tom state
//           console.log("Learn - componentDidMount - Mounted")
//       }

//     render() {
//         console.log("Learn - Rendered [This is a Child of App]")
//         return (
//             <div>
//                 <Employee name="Ayuu"/>
                
//                 <h1>You are on learning phase</h1>
//             </div>
//         )
//     }
// }
