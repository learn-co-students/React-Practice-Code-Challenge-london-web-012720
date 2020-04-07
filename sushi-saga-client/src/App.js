import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushi: [],
    displayedSushi: 0,
    eaten: [],
    // page: 1,
    money: 100
  }

  // componentDidMount() {
  //   this.fetchSushi();
  // }

  // fetchSushi = () => {
  //   fetch(`${API}?_limit=4&_page=${this.state.page}`)
  //     .then((res) => res.json())
  //     .then((sushi) => this.setState({ allSushi: sushi }));
  // };

  // handleMoreSushi = () => {
  //   this.setState({
  //     page: this.state.page + 1
  //   });
  //   this.fetchSushi();
  // }

  componentDidMount = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushi => this.setState({allSushi: sushi}))
  }

  showFourSushi = () => {
    return this.state.allSushi.slice(this.state.displayedSushi, this.state.displayedSushi + 4)
  }

  nextFourSushi = (event) => {
    let newFourSushi = this.state.displayedSushi + 4

    if (newFourSushi >= this.state.allSushi.length) {
       newFourSushi = 0
    }
    return this.setState({
      displayedSushi: newFourSushi
    })
  }

  eatSushi = (sushi) => {
    let newMoney = this.state.money - sushi.price

    if (!this.state.eaten.includes(sushi) && newMoney >=0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    }
  }

  addMoney = (event) => {
    event.preventDefault()
   let newMoney = this.state.money + event.target.value
    this.setState({
      money: newMoney
    })
  }

  render() {
    return (
      <div className="app">
          <form>
            <h3>Deposit Money:</h3>
            <input type="number" onClick={this.addMoney} placeholder="Enter amount"/>
            <input type="Submit"/>
          </form>
        <SushiContainer 
          sushi={this.showFourSushi()} 
          moreSushi={this.nextFourSushi}
          eatSushi={this.eatSushi}
          eaten={this.state.eaten }/>
        <Table 
        remainingBudget={this.state.money}
        eatenSushi={this.state.eaten}
        addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;