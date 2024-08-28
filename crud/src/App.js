import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(async function (res) {
        const json = await res.json();
        setData(json);
      })
  })
  const [searchItem, setSearchItem] = useState('')
  const [filteredData, setFilteredUsers] = useState(data)

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = data.filter((d) =>
      d.body.toLowerCase().includes(searchTerm.toLowerCase())
      );

  
      setFilteredUsers(filteredItems);
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm />

      <div>
        <h1>Fetched Data</h1>
        <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
        <hr />
        {filteredData.map((d) => {
          return <div>
            <h2>ID: {d.id}</h2>
            <h2>Title:{d.title}</h2>
            <h2>Content: {d.body}</h2>
            <hr />
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
