import React from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = React.useState({
        name: "",
        age: "",
        url: "",
        note: ""
    });
    const handleChange = (e: any) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (!input.name || !input.age || !input.url) {
            alert("Please fill all fields");
            return;
        }
        setPeople([...people, {
            name: input.name,
            age: parseInt(input.age),
            url: input.url,
            note: input.note
        }]);
    }
    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" className="AddToList-input" value={input.name} onChange={handleChange} name="name" />
            <input type="text" placeholder="Age" className="AddToList-input" value={input.age} onChange={handleChange} name="age" />
            <input type="text" placeholder="Image" className="AddToList-input" value={input.url} onChange={handleChange} name="url" />
            <textarea placeholder="Note" className="AddToList-input" value={input.note} onChange={handleChange} name="note" />
            <button className="AddToList-btn" onClick={handleClick}>Add</button>
        </div>
    )
}
export default AddToList;
