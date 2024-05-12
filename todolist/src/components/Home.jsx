import { useState } from "react";
import Create from "./Create";
import "./Home.css";

const Home = () => {
    const [todos, setTodos] = useState([]);


    return (
         <div>
            <h1> Todo List </h1>
            <Create/>
            {
                todos.length == 0 ? 
                <div>
                    No Record
                </div> 
                :
                todos.map((todo) => {
                    <div>
                        {todo}
                    </div>
                })
            }
        </div>
    )
}


export default Home