import { useState, useEffect } from 'react'
import SearchItem from './SearchItem';
import Header from './Header';
import Content from './Content';
import AddItem from './AddItem';
import Footer from './Footer';

import ApiRequest from './ApiRequest';
// spinner
import Spinner from './components/Spinner';

function App() {

  // 用json server 建立的api 
  const API_URL = 'http://localhost:3500/items'

  // 從local 拿資料：如果沒有設定|| [] 當localstorage裡面沒有存任何資料，就會出現錯誤，因為item 無法filter 東西
  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || [])

  const [items, setItems] = useState([])
  // 新增的項目
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true); 

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log('123',json))
  // },[])
  // items 有變動就更新localstorage
  useEffect(()=>{
    const fetchItem = async()=>{
      try{
        const response = await fetch(API_URL)
        // response 有個ok狀態可以判定api 是否有資料回來，沒有的話把錯誤訊息丟出來，避免網頁出現error頁面，即便沒有回傳資料，網頁也不錯出錯誤，會是空陣列給items
        if(!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json();
        // console.log('list',listItems)
        setItems(listItems)
        setFetchError(null)
      }catch(err){
        console.log('err',err.message)
        setFetchError(err.message)
      }finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async()=> await fetchItem())()
    }, 2000);
  },[])
  
  // 新增
  const addItem = async(item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked:false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems)

    // 新增的項目寫入api 
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await ApiRequest(API_URL, postOptions);
    console.log('result',result)
    if (result) setFetchError(result);
  }

  // 更新
  // 這邊已經先做更新check的狀態，所以寫入json api時只要找到更新的item並更新check就好
  const handleCheck = async(id) =>{

    // obj 的展開，後面直接接key:value 就是更新obj的意思
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    // 找到對應的id(表示有更新的item)
    const myItem = listItems.filter((item)=> item.id === id)

    const updateOptions = {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`
    // 發送到的api 是指定的項目，body 裡面只包check的狀態，表示只更新這個項目的check
    const result = await ApiRequest(reqUrl,updateOptions)
    if(result) setFetchError(result)

  }

  // 刪除
  const handleDelete = async(id) => {
    const listItems = items.filter((item)=> item.id !== id)
    setItems(listItems)

    const deleteOptions = {method:'DELETE'}
    const reqUrl = `${API_URL}/${id}`
    const result = await ApiRequest(reqUrl,deleteOptions)
    if(result) setFetchError(result)

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
      <Header title="Grocery List"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
      {/* isLoading 是true 的時候載入後面的字樣 */}
      {isLoading && <Spinner isLoading={isLoading}/>}
      {/* {isLoading && <p>Loading Items...</p>} */}
      {/* 如果api有誤，顯示錯誤訊息 */}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}

      {/* 如果api沒有錯誤，也不是載入中，才顯示內容 */}
        {!fetchError && !isLoading &&
        <Content 
          // 先篩選完再往下傳給child 元件去map
          items={items.filter(value =>((value.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        }        
      </main>
      <Footer
        length = {items.length}
      />
    </div>
    
      
    
  );
}

export default App;
