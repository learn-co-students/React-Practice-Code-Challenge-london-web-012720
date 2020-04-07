import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sushis : [],
      displaySushis : [0,4],
      wallet : 100,
      eatedSushis : []
    }
  }

  componentDidMount(){
    fetch(API)
      .then(r => r.json())
      .then(sushis => this.setState({sushis}));
  }

  handleMoreClick = () => {
    this.setState({
      displaySushis : [this.state.displaySushis[1], this.state.displaySushis[1] + 4]
    })
  }

  updateWallet = (price) => {
    this.setState(previousState => {
      return {wallet : previousState.wallet - price}
    })
  } 

  updatePlates = (sushi) =>{
    this.setState({
      eatedSushis : [...this.state.eatedSushis, sushi]
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          data={this.state.sushis} 
          display={this.state.displaySushis} 
          handleMoreClick={this.handleMoreClick}
          money={this.state.wallet}
          updateWallet={this.updateWallet}
          updatePlates={this.updatePlates}
          />
        <Table money={this.state.wallet} eatedSushis={this.state.eatedSushis}/>
      </div>
    );
  }
}

export default App;