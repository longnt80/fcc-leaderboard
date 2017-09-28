import React from 'react';
import axios from 'axios';
import './Table.css';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
  }

  componentDidMount() {
    axios.get(this.props.url)
    .then(function (res) {
      this.setState(prevState => ({data: res.data}));
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  componentWillReceiveProps() {
    this.setState(prevState => ({data: []}));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      axios.get(this.props.url)
      .then(function (res) {
        this.setState(prevState => ({data: res.data}));
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  render() {
    let campers = '';

    const tableHeader = (
      <div className="camper Table__header">
      <div className="camper__rank Table__header__item">#</div>
      <div className="camper__username Table__header__item">Camper Name</div>
      <div className="camper__recent-points Table__header__item">Points in past 30 days</div>
      <div className="camper__alltime-points Table__header__item">All time points</div>
      </div>
    )

    if (this.state.data.length === 0) {
      campers = 'Loading...'
    }
    else {
      campers = this.state.data.map((camper, i) => {
        return (
          <div className="camper" key={camper.username}>
          <div className="camper__rank">{i + 1}</div>
          <div className="camper__username"><a href={'https://www.freecodecamp.org/' + camper.username}>{camper.username}</a></div>
          <div className="camper__recent-points">{camper.recent}</div>
          <div className="camper__alltime-points">{camper.alltime}</div>
          </div>
        )
      });
    }

    return (
      <div className="Table">
        {tableHeader}
        {campers}
      </div>
    )
  }
}

export default Table;
