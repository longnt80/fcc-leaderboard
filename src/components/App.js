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
    this.state = {url: fcc.alltime};
  }

  changeUrl = (e) => {
    const btn = e.target.innerText;
    console.log(btn);
    if ( btn === 'Recent' ) {
      this.setState(prevState => ({url: fcc.recent}));
    }
    else if ( btn === 'All Time' ) {
      this.setState(prevState => ({url: fcc.alltime}));
    }
  }

  render() {
    console.log(this.state.url);

    return (
      <div>
        <Header whenBtnClicked={this.changeUrl}/>
        <Table url={this.state.url}/>
      </div>
    )
  }
}

export default App;
