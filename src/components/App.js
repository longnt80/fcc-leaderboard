import React from 'react';
import axios from 'axios';
import Table from './Table';
// import TableRecent from './TableRecent';
// import TableAlltime from './TableAlltime';
// import TableRecentHeader from './TableRecentHeader';
// import TableAlltimeHeader from './TableAlltimeHeader';
// import TableLoading from './TableLoading';
import Header from './Header';

const fcc = {
  alltime: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
  recent: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: fcc.alltime,
      tableType: 'alltime',
      campersArray: [],
      cachedArray: {}
    };
  }

  update(val) {
    const { url, cachedArray } =  this.state;
    const cached = cachedArray[url];

    if (!cached) {
      axios.get(this.state.url)
      .then(res => res.data)
      .then(result => {
        this.setState({
          cachedArray: {
            ...cachedArray,
            [url]: result
          }
        });
      })
      .catch(error => console.log(error));
    }

  }

  componentDidMount() {
    this.update(this.state.url);
  }

  changeUrl = (e) => {
    const btn = e.target.innerText;
    if ( btn === 'Recent' ) {
      this.setState({
        url: fcc.recent,
        tableType: 'recent'
      });
    }
    else if ( btn === 'All Time' ) {
      this.setState({
        url: fcc.alltime,
        tableType: 'alltime'});
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.url !== this.state.url) {
      this.setState({campersArray: []});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      this.update();
    }
  }

  render() {
    const { url, cachedArray } = this.state;
    const cachedData = cachedArray[url];

    // if (cachedData === undefined) {
    //   return (
    //     <div className="App">
    //       <Header whenBtnClicked={this.changeUrl} tableType={this.state.tableType} />
    //       <TableLoading />
    //     </div>
    //   )
    // }
    // else {
    //   if (tableType === 'recent') {
    //     return (
    //       <div className="App">
    //         <Header whenBtnClicked={this.changeUrl} tableType={this.state.tableType} />
    //         <TableRecent key={}/>
    //       </div>
    //     )
    //   }
    // }

    return (
      <div className="App">
        <Header whenBtnClicked={this.changeUrl} tableType={this.state.tableType} />
        <Table tableType={this.state.tableType} data={cachedData} />

      </div>
    )
  }
}

export default App;
