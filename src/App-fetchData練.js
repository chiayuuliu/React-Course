import { useState, useEffect } from "react";
import FetchData from "./components/FetchData";

function App() {
  const [data, setData] = useState([]);
  const [dataCate, setDataCate] = useState("users");

  const API_URL = `https://jsonplaceholder.typicode.com/`;

  useEffect(() => {
    const fetchItem = () => {
      fetch(`${API_URL}${dataCate}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    fetchItem();
  }, [dataCate]);

  return (
    <div className="App">
      <div className="btnWrap">
        <button
          onClick={(e) => {
            setDataCate("users");
          }}
        >
          user
        </button>
        <button
          onClick={(e) => {
            setDataCate("posts");
          }}
        >
          posts
        </button>
        <button
          onClick={(e) => {
            setDataCate("comments");
          }}
        >
          comments
        </button>
      </div>
      <div className="datawrap">
        {data.map((value) => {
          return <FetchData key={value.id} value={value} />;
        })}
      </div>
    </div>
  );
}

export default App;
