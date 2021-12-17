import React, { Component } from 'react'

export default class User extends Component{
    render(){
        return(
            <>
            <h1>Welcome Ayushiii</h1>
            <button type="button" onClick={this.props.clickData}>Logout</button>
            </>
        )
    }
}

// if else statement
// export default class User extends Component{
//     render(){
//         return(
//             <>
//             <h1>Welcome Ayushii</h1>
//             <button type="button" onClick={this.props.clickData}>Logout</button>
//             </>
//         )
//     }
// }

// using inline if
// export default class User extends Component{
//     render(){
//         return(
//             <h3>Prime Member</h3>
//         )
//     }
// }


// if statement
// import React, { Component } from 'react'

// export default class User extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome Ayushii</h1>
//                 <button>Logout</button>
//             </div>
//         )
//     }
// }
