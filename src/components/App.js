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
    this.state = {data: fcc.alltime};
  }

  whenBtnClicked = (e) => {
    console.log(e.target.innerText);
    const btn = e.target.innerText;
    if ( btn === 'Recent' ) {
      this.setState(prevState => ({data: fcc.recent}));
    }
    else if ( btn === 'All Time' ) {
      this.setState(prevState => ({data: fcc.alltime}));
    }

  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Header showBtn={this.whenBtnClicked}/>
        <Table api={this.state.data}/>
      </div>
    )
  }
}

export default App;
