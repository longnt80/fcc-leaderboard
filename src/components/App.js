import React from 'react';
import Table from './Table';
import Header from './Header';

const fcc = {
  alltime: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
  recent: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url: fcc.alltime, tableType: 'alltime'};
  }

  changeUrl = (e) => {
    const btn = e.target.innerText;
    console.log(btn);
    if ( btn === 'Recent' ) {
      this.setState(prevState => ({url: fcc.recent, tableType: 'recent'}));
    }
    else if ( btn === 'All Time' ) {
      this.setState(prevState => ({url: fcc.alltime, tableType: 'alltime'}));
    }
  }

  render() {
    console.log(this.state.url);


    return (
      <div className="App">
        <Header whenBtnClicked={this.changeUrl} tableType={this.state.tableType} />
        <Table url={this.state.url} tableType={this.state.tableType} />
      </div>
    )
  }
}

export default App;
