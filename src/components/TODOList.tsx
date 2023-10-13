import { create } from "domain";
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import Row from "./Row"
import { connect } from "http2";


function TODOList() {
    const [TODOContent, setNewList] = useState("");

    const [todos, setTodo] = useState<Array<string>>([]);

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date  = today.getDate();


    function ChangeSetTodo() {
        if (TODOContent != '') {
            setTodo([...todos, TODOContent]);
            setNewList("");
            console.log(todos.length);
        }
    }

    return (
        <div className="App">
            <div>
                <input type="text" value={TODOContent} onChange={(event) => setNewList(event.target.value)} /><span><button className="addbutton" onClick={() => ChangeSetTodo()}>追加</button></span>
            </div>

            <div className="contents">
                <div><button className="AllDelete"><small>一括削除</small></button></div>
                <table id="table" border={1}>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>登録日</th>
                            <th>TODO</th>
                            <th>削除</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo, index) => {
                                return <Row key={todo} content={todo} id={index} date={`${year}/${month}/${date}`}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TODOList;