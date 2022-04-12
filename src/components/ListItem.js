import React from 'react'

const ListItem = ({value}) => {
  return (
    <li>
        {JSON.stringify(value)}
    </li>
  )
}

export default ListItem