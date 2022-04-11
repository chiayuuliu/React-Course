import React from 'react'
import BeatLoader
from 'react-spinners/BeatLoader'

const Spinner = ({isLoading}) => {

  const override = {
    position: 'absolute',
    top: '50%',
    left: '45%',
    paddingRight: '0!important',
    paddingLeft: '0!important',
    zIndex: '100',
  }
  
  return (
    <BeatLoader
        loading={isLoading}
        color= '#4A90E2'
        css={override}
        size={15}
      />
  )
}

export default Spinner