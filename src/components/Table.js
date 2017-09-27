import React from 'react';
import axios from 'axios';
import './Table.css';

const tableHeader = (
  <div className="camper Table__header">
  <div className="camper__rank Table__header__item">#</div>
  <div className="camper__username Table__header__item">Camper Name</div>
  <div className="camper__recent-points Table__header__item">Points in past 30 days</div>
  <div className="camper__alltime-points Table__header__item">All time points</div>
  </div>
)


class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {campers: 'Loading...'}
  }

  componentDidMount() {
    axios.get(this.props.api)
    .then(function (res) {
      console.log(res.data)

      const campers = res.data.map((camper, i) => {
          return (
            <div className="camper" key={camper.username}>
              <div className="camper__rank">{i + 1}</div>
              <div className="camper__username"><a href={'https://www.freecodecamp.org/' + camper.username}>{camper.username}</a></div>
              <div className="camper__recent-points">{camper.recent}</div>
              <div className="camper__alltime-points">{camper.alltime}</div>
            </div>
          )
      });

      this.setState(prevState => ({campers}));
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    axios.get(this.props.api)
    .then(function (res) {
      const campers = res.data.map((camper, i) => {
          return (
            <div className="camper" key={camper.username}>
              <div className="camper__rank">{i + 1}</div>
              <div className="camper__username"><a href={'https://www.freecodecamp.org/' + camper.username}>{camper.username}</a></div>
              <div className="camper__recent-points">{camper.recent}</div>
              <div className="camper__alltime-points">{camper.alltime}</div>
            </div>
          )
      });

      this.setState(prevState => ({campers}));
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="Table">
        {tableHeader}
        {this.state.campers}
      </div>
    )
  }
}

export default Table;
