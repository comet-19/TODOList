import { create } from "domain";
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";


function TODOList() {
    const [TODOContent, setNewList] = useState("");

    function addrow() {
        if (TODOContent != '') {
            let tbl = document.getElementById('table');

            let tr = document.createElement('tr');
            let setFirstbox = document.createElement('td');
            let setCheckbox = document.createElement('input');

            setCheckbox.setAttribute('type', 'checkbox');//inputを日付形式に
            setFirstbox.appendChild(setCheckbox);        //tdに追加
            tr.appendChild(setFirstbox);

            let setSecondBox = document.createElement('td');
            let date = new Date();
            const dateText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
            setSecondBox.innerHTML = dateText;
            tr.appendChild(setSecondBox);

            let setThirdBox = document.createElement('td');
            let Newcontent = TODOContent;
            setThirdBox.innerHTML = Newcontent;
            tr.appendChild(setThirdBox);

            let setForthBox = document.createElement('td');
            let setdeletebutton = document.createElement('button');
            const del = "削除";
            setdeletebutton.innerHTML = del;
            setForthBox.appendChild(setdeletebutton);
            tr.appendChild(setForthBox);

            tbl?.appendChild(tr);

            setNewList("");
        }

    }

    return (
        <div className="App">
            <header>
                React-v3
            </header>
            <h1>TODOList</h1>
            <div>
                <input type="text" value={TODOContent} onChange={(event) => setNewList(event.target.value)} /><span><button onClick={() => addrow()}>追加</button></span>
            </div>
            <div className="contents">
                <table id="table" border={1}>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>登録日</th>
                        <th>TODO</th>
                        <th>削除</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>2023/10/3</td>
                        <td>勉強</td>
                        <td>削除</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>2023/10/5</td>
                        <td>ゲーム</td>
                        <td>削除</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>2023/10/8</td>
                        <td>掃除</td>
                        <td>削除</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default TODOList;