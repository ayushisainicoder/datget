import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Carts = () => {
    const [state, setstate] = useState();

    useEffect(() => {
        axios
        .get("https://fakestoreapi.com/carts")
        .then((response)=>{
            console.log(response);
            setstate(response)
        })
        .catch((error)=>{
            console.log(error)

        });
    }, []);


    return (
        <div>
            <h3>Carts details</h3>
            <table>
                <thead>
                    <th>id</th>
                    <th>date</th>
                    <th>products</th>
                </thead>
                <tbody>
                    {state?.data.map((detail)=>{
                        return(
                            <tr>
                                <td>{detail.id}</td>
                                <td>{detail.date}</td>
                                {/* <td>{detail.products.map((quantity)=>{
                                    console.log(quantity);
                                })}</td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Carts
