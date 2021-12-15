import React, { Component } from 'react'

export default class employee extends Component{
    constructor(props){
        super(props);
        this.state = {
            emp_id : this.props.id
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("Get Derived From Props");
        console.log(props,state);
        if(props.id !== state.emp_id){
            return{emp_id : props.id};
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.emp_id < 107){
        console.log("Employee - Should Component Update");
        console.log(nextProps,nextState);
        return true;
        }
        console.log(nextProps,nextState);
        return false;
        
    }

    render(){
        console.log("Employee Rendering");
        return(
            <div>
                <h1>{this.state.emp_id}</h1>
            </div>
        )
    }
}

// mounting
// export default class employee extends Component {
//     render() {
//         console.log("Employee Rendered [This is a Child of Learn]");
//         return (
//             <div>
//                 <h1> Hello {this.props.name} Employee</h1>
//             </div>
//         )
//     }
// }
