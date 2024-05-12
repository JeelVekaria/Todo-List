import { useState } from "react";
import "./Create.css";

const Create = () => {
    return (
        <>
            <div class="input-group">
                <input placeholder="Enter new item here" type="text" id="input-field"/>
                <button class="submit-button"><span>ADD</span></button>
            </div>
        </>
    )
}


export default Create