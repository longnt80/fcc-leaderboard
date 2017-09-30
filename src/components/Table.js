import React from 'react';
import './Table.css';

const Table = ({tableType, data}) => {

    let campers = '';
    const tableHeaderRecent = (
      <div className="camper Table__header">
      <div className="camper__rank Table__header__item">#</div>
      <div className="camper__username Table__header__item">Camper Name</div>
      <div className="camper__recent-points Table__header__item">Points in past 30 days</div>
      <div className="camper__alltime-points Table__header__item">All time points</div>
      </div>
    )
    const tableHeaderAlltime = (
      <div className="camper Table__header">
      <div className="camper__rank Table__header__item">#</div>
      <div className="camper__username Table__header__item">Camper Name</div>
      <div className="camper__alltime-points Table__header__item">All time points</div>
      <div className="camper__recent-points Table__header__item">Points in past 30 days</div>
      </div>
    )

    if (data === undefined) {
      campers = <div className="Table"><div className="preload-text">Loading campers...</div></div>
    }
    else {
      if ( tableType === 'recent' ) {
        campers = data.map((camper, i) => {
          return (
            <div className="camper" key={camper.username}>
              <div className="camper__rank">{i + 1}</div>
              <div className="camper__username"><img src={camper.img} alt=""/><a href={'https://www.freecodecamp.org/' + camper.username}>{camper.username}</a></div>
              <div className="camper__recent-points">{camper.recent}</div>
              <div className="camper__alltime-points">{camper.alltime}</div>
            </div>
          )
        });
      }
      else if ( tableType === 'alltime' ) {
        campers = data.map((camper, i) => {
          return (
            <div className="camper" key={camper.username}>
            <div className="camper__rank">{i + 1}</div>
            <div className="camper__username"><img src={camper.img} alt=""/><a href={'https://www.freecodecamp.org/' + camper.username}>{camper.username}</a></div>
            <div className="camper__alltime-points">{camper.alltime}</div>
            <div className="camper__recent-points">{camper.recent}</div>
            </div>
          )
        });
      }

    }

    if ( tableType === 'recent' ) {
      return (
        <div className="Table">
        {tableHeaderRecent}
        {campers}
        </div>
      )
    }
    else if ( tableType === 'alltime' ) {
      return (
        <div className="Table">
        {tableHeaderAlltime}
        {campers}
        </div>
      )
    }

}

export default Table;
