import { useState } from 'react'
import Header from './Header';
import Content from './Content';
import AddItem from './AddItem';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))

  const setAndSaveItems = (newItems)=>{
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  // 新增的項目
  const [newItem, setNewItem] = useState('')
  // 理解這段func
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked:false, item };
    const listItems = [...items, myNewItem];
    console.log('id',id)
    console.log('myNewItem',myNewItem)
    console.log('listItems',listItems)
    setAndSaveItems(listItems)
  }

  const handleCheck = (id) =>{
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item)=> item.id !== id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 如果沒有就結束func
    if(!newItem) return
    // 如果input有輸入項目會執行addItem
    addItem(newItem)
    setNewItem('')
  }
  
  return (
    <div className="App">
      <Header title="Doris List"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length = {items.length}
      />
    </div>
  );
}

export default App;
