import React from 'react'
import ItemList from './ItemList'
const Content = ({items,handleCheck,handleDelete}) => {

  // 會隨機給0-3之間的整數
  // 隨機取名子出來
  // const HandleNameChange = ()=>{
  //   const names=['Bob','Doris','Dave']
  //   const int = Math.floor(Math.random()*3)
  //   setName(names[int]);
  // }
  
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop:'2rem'}}>Your list is empty</p>
      )}
    </>
  )
}

export default Content