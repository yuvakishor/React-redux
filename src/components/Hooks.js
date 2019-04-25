import React, { useState } from 'react';


const Hooks = () => {
    const [value, setValue] = useState("")
    const [name, setName] = useState("yuva")
    const [todos, setTodos] = useState([
        {
            name: "yuva",
            gender: "male",
            age: "23"
        },
        {
            name: "chenna",
            gender: "male",
            age: "24"
        },
        {
            name: "vamsi",
            gender: "male",
            age: "25"
        }
    ])
    const handleSetName = () => {
        setName("chenna")
    }
    const onHandle = (e) => {
        setValue(e.target.value)
    }
    return (
        <React.Fragment>
           {/* access the input box in functional component  */}
            Enter the:<input type="text" value={value} onChange={onHandle} />
            <h2>{value}</h2>
            {/* Button using the functional component */}
            <button onClick={handleSetName}>click</button>
            <h3>{name}</h3>
            
            <h2>Person Details</h2>
            {
                todos.map((val, i) => (
                      
                        <div className="table" key={i}>
                            <tr>
                                <th>Names</th>
                                <th>Gender</th>
                                <th>Age</th>
                            </tr>
                            <tr>
                                <td>{val.name}</td>
                                <td>{val.gender}</td>
                                <td>{val.age}</td>
                            </tr>
                        </div>
                ))
            }
        </React.Fragment>
    )
}
export default Hooks;