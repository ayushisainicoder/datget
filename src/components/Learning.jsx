import React from 'react'

// const name = "Nishh"
// function
// function show(name){
//     return name;
// }
// property
let user = {
    firstname: "Nishh"
};
const Learning = (props) =>{
    return(
        <h1>
            {/* Hello {props.name}  */}
            {/* Hello my name is {show("Ayushiiii")}   (function)*/} 
            Hello {user.firstname}
        </h1>
    )
}

export default Learning
