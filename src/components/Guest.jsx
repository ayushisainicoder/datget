import React, { Component } from 'react'

export default class Guest extends Component{
    render(){
        return(
            <>
            <h1>welcome Guest</h1>
            <button type="button" onClick={this.props.clickData}>Login</button>
            <button>SignUp</button>
            </>
        )
    }
}

// if else statement
// export default class Guest extends Component{
//     render(){
//         return(
//             <>
//             <h1>Welcome Guest</h1>
//             <button type="button" onClick={this.props.clickData}>Login</button>
//             <button>SignUp</button>
//             </>
//         )
//     }
// }

// export default class Guest extends Component{
//     render(){
//         const primeMember = this.props.primeMember
//         return()
//     }
// }


// if statement
// import React, { Component } from 'react'

// export default class Guest extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome Guest</h1>
//                 <button>Login</button>
//                 <button>SignUp</button>
//             </div>
//         )
//     }
// }
