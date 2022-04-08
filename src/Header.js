import React from 'react'

const Header = ({title}) => {
    // 這是一個obj 不是一個func，也可以這樣寫但通常不會用inline style
    const headerStyle = {
        backgroundColor:'royalblue',
        color:"#fff",
        padding: '10px'
    }
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

// 可以設定預設的Props 內容
Header.defaultProps = {
  title:"Default Title"
}

export default Header