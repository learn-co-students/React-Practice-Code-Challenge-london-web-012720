import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(e) => props.handleMoreClick(e)}>
            More sushi!
          </button>
}

export default MoreButton