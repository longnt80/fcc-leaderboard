import React from 'react';

const TableHeaderRecent = () =>
(
  <div className="camper Table__header">
    <div className="camper__rank Table__header__item">#</div>
    <div className="camper__username Table__header__item">Camper Name</div>
    <div className="camper__recent-points Table__header__item">Points in past 30 days</div>
    <div className="camper__alltime-points Table__header__item">All time points</div>
  </div>
)

export default TableHeaderRecent;
