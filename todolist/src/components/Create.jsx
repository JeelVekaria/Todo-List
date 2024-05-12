import { useState } from "react";
import axios from "axios"; //passes data
import "./Create.css";

const Create = () => {
  const [task, setTask] = useState("");
  const handleAdd = (e) => {
    axios
      .post("http://localhost:3000/add", { task })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  return (
    <>
      <div class="input-group">
        <input
          placeholder="Enter new item here"
          type="text"
          id="input-field"
          onChange={(e) => setTask(e.target.value)}
        />
        <button class="submit-button" onClick={handleAdd}>
          <span>ADD</span>
        </button>
      </div>
    </>
  );
};

export default Create;
