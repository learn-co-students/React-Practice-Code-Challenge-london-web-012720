import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

export default class SushiContainer extends Component {
  renderSushis(){
    const {display} = this.props;
    return this.props.data.slice(display[0],display[1]).map(s => <Sushi key={s.id} sushi={s} money={this.props.money} updateWallet={this.props.updateWallet} updatePlates={this.props.updatePlates}/>)
  }

  

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushis()}
          <MoreButton handleMoreClick={this.props.handleMoreClick}/>
        </div>
      </Fragment>
    )
  }
}
