import React from 'react'

const Square = ({colorValue,isDarkText}) => {
  return (
    <section
        className='square'
        style={{
            backgroundColor:colorValue,
            color: isDarkText ? "#000" : '#fff'
        }}>
        <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  )
}

Square.defaultProps = {
    colorValue:"Empty Color Value"
}

export default Square