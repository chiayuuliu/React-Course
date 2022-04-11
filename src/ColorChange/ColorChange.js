import React, { useState } from 'react'

const ColorChange = () => {

const [ color, setColor ] = useState('red')
const [newColor, setNewColor] =useState('Empyt Value')
  return (
    <>
    
    <div className="colorbox"
        style={{backgroundColor: color}}>
        <p>{newColor}</p>
    </div>
    <input
        className='boxcolor'
        autoFocus
        id='colorname' 
        type="text"
        placeholder='set Color'
        value={color}
        onChange={(e)=>{
            setColor(e.target.value)
            setNewColor(e.target.value)
        }}
    />
    </>
  )
}

export default ColorChange