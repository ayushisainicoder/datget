import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Userdetail = () => {
    const [state, setstate] = useState();

    useEffect(() => {
        axios
        .get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res);
            setstate(res);
        })
        .catch((err) =>{
            console.log(err);
                   
        });
    
    }, []);
    
    return (
        <div>
            <h3>User Details</h3>
        <table>
            <thead>
                <th>id</th>
                <th>title</th>
                <th>category</th>
                <th>rating.rate</th>
                <th>rating.count</th>
            </thead>
            <tbody>
                {state?.data.map((user)=>{
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.category}</td>
                            <td>{user.rating.rate}</td>
                            <td>{user.rating.count}</td>

                            
                        </tr>
                    );
                })}
       
            </tbody>
        </table>
        </div>
    );
};

export default Userdetail
