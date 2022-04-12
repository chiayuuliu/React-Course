import { useState, useEffect } from "react";
import Form from "./components/Form";
//清單列表
import List from "./components/List";
// 表格
import Table from "./components/Table";

function App() {
  const API_URL = `https://jsonplaceholder.typicode.com/`;

  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    // async 寫法
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    // fetch 寫法
    // const fetchItem = () => {
    //   fetch(`${API_URL}${reqType}`)
    //     .then((res) => res.json())
    //     .then((data) => setItems(data));
    // };
    fetchItem();
  }, [reqType]);

  return (
    <div className="App">
      {/* Form>button 元件 */}
      <Form reqType={reqType} setReqType={setReqType} />
      {/* list > listItem*/}
      {/* <List items={items} /> */}
      <Table items={items}/>
    </div>
  );
}

export default App;
