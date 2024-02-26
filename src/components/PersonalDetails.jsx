import { useState } from "react";

function PersonalDetails() {
    const [name, setName] = useState("");
    return (
        <form>
            <label>Full Name:</label>
            <input type="text" id="full-name" value={name} onChange={(e) => setName(e.target.value)}></input>
        </form>
    )
}

export default PersonalDetails;