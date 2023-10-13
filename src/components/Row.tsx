import React from "react";
import "./App.css"

function Row (props:any) {
    
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{props.date}</td>
            <td>{props.content}</td>
            <td><button onClick={props.onClick}>Delete</button></td>
        </tr>
    )
}

export default Row;