import React, { Fragment, Component } from 'react'

export default class Sushi extends Component {
  constructor(props){
    super(props);
    this.state = {
      eated : false
    }
  }

  handleClick = (e, sushi, price) =>{
    //check if customer has money left
    if (this.props.money > price){
      this.setState({eated : true});
      this.props.updateWallet(price);
      this.props.updatePlates(sushi);
    }else{
      alert("You cannot afford this sushi!");
    }
  }
  
  render() {
    const {name, price, img_url} = this.props.sushi;
    return (
      <div className="sushi">
      <div className="plate" 
          onClick={(e) => this.handleClick(e, this.props.sushi, price)}>
          { this.state.eated ? null : <img src={img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
    )
  }
}


