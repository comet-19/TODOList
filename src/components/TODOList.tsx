import "./App.css";


function TODOList() {

    return (
        <div className="App">
            <header>
                React-v3
            </header>
            <h1>TODOList</h1>
            <div>
                <input type="text" /><span><button>追加</button></span>
            </div>
            <div className="contents">
                <table border={1}>
                    <tr>
                        <th><input type="checkbox"/></th>
                        <th>登録日</th>
                        <th>TODO</th>
                        <th>削除</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>2023/10/03</td>
                        <td>勉強</td>
                        <td>削除</td>
                    </tr>
                    <tr>
                    <td><input type="checkbox"/></td>
                        <td>2023/10/05</td>
                        <td>ゲーム</td>
                        <td>削除</td>
                    </tr>
                    <tr>
                    <td><input type="checkbox"/></td>
                        <td>2023/10/08</td>
                        <td>掃除</td>
                        <td>削除</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default TODOList;
