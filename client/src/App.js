import React from 'react';
import axios from 'axios';
import TopBar from './components/TopBar';
import CardList from './components/CardList'
import './assets/css/index.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      playerList: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')   // Get Player List
      .then(res => this.setState({playerList: res.data}))
  
  }

  render() {
      return (
        <div className="App">
          <TopBar />
          <CardList players={this.state.playerList} />
        </div>
      );
  }
}
export default App;