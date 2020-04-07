import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushis = () => {
   return props.sushis.map(sushi => {
    return <Sushi 
    name={sushi.name} 
    img_url={sushi.img_url} 
    price={sushi.price} 
    id={sushi.id} 
    key={sushi.id}
    eatSushi={props.eatSushi}
    eatenSushi={props.eatenSushi}
   />})
  //  can use spread operator / return props.sushis.map(sushi => <Sushi {...sushi} />
  }

  return (
    <Fragment>
      <div className="belt">
        {// Render Sushi components here!
          renderSushis()
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer