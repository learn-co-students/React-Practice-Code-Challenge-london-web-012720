import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import Wallet from "./containers/Wallet";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    money: 100,
    sushi: [],
    eatenSushi: [],
    page: 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`${API}?_limit=4&_page=${this.state.page}`)
      .then((res) => res.json())
      .then((data) => this.setState({ sushi: data }));
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          eatenSushi={this.state.eatenSushi}
          sushi={this.state.sushi}
          handleMoreSushi={this.handleMoreSushi}
          onSushiEaten={this.onSushiEaten}
        />
        <Table money={this.state.money} sushi={this.state.eatenSushi} />
        <Wallet handleWalletSubmit={this.handleWalletSubmit} />
      </div>
    );
  }
  onSushiEaten = (sushi) => {
    if (this.state.money >= sushi.price) {
      this.state.eatenSushi.push(sushi);
      this.setState({
        eatenSushi: this.state.eatenSushi,
        money: this.state.money - sushi.price,
      });
    }
  };

  handleMoreSushi = () => {
    this.setState({ page: this.state.page + 1 });
    this.fetchData();
  };
  handleWalletSubmit = (e) => {
    e.preventDefault();
    this.setState({
      money: Number(this.state.money) + Number(e.target.AddedMoney.value),
    });
  };
}

export default App;
