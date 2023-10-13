import React from "react";
import "./App.css"

function Row (props:any) {
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{props.id}</td>
            <td>{props.content}</td>
            <td>Delete</td>
        </tr>
    )
}

export default Row;