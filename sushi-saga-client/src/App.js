import React from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';



// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      eatenSushi: [],
      display: 0,
      money: 150
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushis => { this.setState({sushis})
    })
  }

  fourSushi = () => {
    return this.state.sushis.slice(this.state.display, this.state.display + 4)
  }

  moreSushi = () => {
    let newSushi = this.state.display + 4
    this.setState({
      display: newSushi 
    })
  }

  eatSushi = (id, price) => {
    if (!this.state.eatenSushi.includes(id) && this.state.money >= price) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, id],
        money: this.state.money - price
      })
    }
    
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.fourSushi()}
        moreSushi = {this.moreSushi}
        eatSushi={this.eatSushi}
        eatenSushi={this.state.eatenSushi}
        />
        <Table eatenSushi={this.state.eatenSushi} money={this.state.money}/>
      </div>
    );
  }
}

export default App;