import './App.css';
import Carts from './components/Carts';
import Userdetail from './components/Userdetail';
import Learning from './components/Learning';
import Student from './components/Student';
import React, { Component, useState, useEffect} from 'react'
import Learn from './components/Learn';
// import useCostomCounter from './components/Custom';
// import User from './components/User';
// import Guest from './components/Guest';
import Custom from './components/Custom';

export default class App extends Component{
  state = {
    users: [
      {id: 101, name: "Ayushii", password: "ab1234"},
      {id: 102, name: "Piyaa", password: "nj455"},
      {id: 103, name: "Ayuuuu", password: ""}
    ],
    isLoggedIn: false,
  }
  render(){
    const newUsers = this.state.users.map((user)=>{
      console.log(user)
      return <h1>ID: {user.id} Name: {user.name} Password: {user.password}</h1>
    })
    return(
      <>
        {newUsers}
      {/* <h2>ID: {this.state.users[0].id} Name: {this.state.users[0].name} Password: {this.state.users[0].password} </h2>
      <h2>ID: {this.state.users[1].id} Name: {this.state.users[1].name} Password: {this.state.users[1].password} </h2>
      <h2>ID: {this.state.users[2].id} Name: {this.state.users[2].name} Password: {this.state.users[2].password} </h2> */}
      </>
    )
  }
}

// export default class App extends Component{
//   render(){
//     const ArrValues = [10,20,30,40];
//     return(
//       <Custom numbers = {ArrValues} />
//     )
//   }
// }

// map method
// export default class App extends Component{
//   render(){
//     const arr = [10,20,30,40,50]
//     const newArr = arr.map((num)=>{
//       console.log("Num=", num);
//       return <li>{num*2}</li>;
//     });
//     console.log("OldArray = ", arr);
//     console.log("NewArray = ", newArr);
//     return(
//       <ul>{newArr}</ul>
//     )
//   }
// }

// export default class App extends Component{
//   render(){
//     const arr = [10,20,30,40,50];
//     return(
//       <>
//       <ul>
//         <li>{arr[0] * 2}</li>
//         <li>{arr[1] * 2}</li>
//         <li>{arr[2] * 2}</li>
//         <li>{arr[3] * 3}</li>
//       </ul>
//       {/* <Custom /> */}
//       </>
//     )
//   }
// }

//  if else statement
// export default class App extends Component{
//   render(){
//     return(
//       <>
//       <Custom />
//       </>
//     )
//   }
// }

// using inline if
// export default class App extends Component{
//   render(){  
//     return(
//       <div>
//         <Custom primeMember = {true}  />
//         {/* <Custom consumer={false}/> */}
//       </div>
//     )
//   }
// }

//  Custom hook
// export default function App(){
//   const data = useCostomCounter();

// return(
//   <>
//   <h1>Count Up: {data.count}</h1>
//   <button type="button" onClick={data.handleIncrement}>Increment</button>
//   </>
// )
// }

// useEffect in function
// export default function App() {
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(50);

//   const handleIncrement=()=>{
//     setCount(count + 1);
//   }
  
//   const handleDecrement=()=>{
//     setCount1(count1 - 1);
//   }

//   useEffect(() => {
//     console.log("Use Effect Called")
//   },[count, count1]);

//   return (
//     <div>
//       <h1>Count Up: {count}</h1>
//       <button type="button" onClick={handleIncrement}>Increment</button>
//       <h1>Count Down: {count1}</h1>
//       <button type="button" onClick={handleDecrement}>Decrement</button>
//     </div>
//   )
// }


// function hooks
// export default function App() {
//   const [name, setName] = useState("Ayushhii"); 
//   const [roll, setRoll_no] = useState(101)

//   const handleClick=()=>{
//     console.log("Button Click")
//     setName("Sainii");
//     setRoll_no(105);
//   };
  

//   return (
//     <div>
//       <h1>My name is {name}</h1>
//       <h2>My roll no {roll}</h2>
//       <button type="button" onClick={handleClick}>Change</button>
      
//     </div>
//   );
// }



// export default class App extends Component {
  
//   render() {
//     console.log("Main App Rendered")
//     return (
      
//       <div>
        
//         <Learn name="I_am_Learn_prop"/>
//         {/* <Student roll_no={106} /> */}
//         {/* for function component */}
//         {/* <Student name="niaaa"/> */}

//         {/* for class component */}
//         {/* <Student roll_no = {123}/> */}

//         {/* <Student roll_no={101}/> */}

//         {/* <Student name="Ayuusshhhiii" roll_no={100+2} />, */}
//         {/* <Student>I am child</Student> */}
        
//         {/* <Learning />  */}
//         {/* <Learning name="Nehaa"/> 
//         <Learning name="Parul" /> */}
//       </div>
      
      
        
          
//     );
//   }
// }
