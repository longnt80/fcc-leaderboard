import React from 'react';

const TableAlltime = ({ username, recent, alltime, index, img }) =>
(
  <div className="camper" key={username}>
    <div className="camper__rank">{index + 1}</div>
    <div className="camper__username"><img src={img} alt=""/><a href={'https://www.freecodecamp.org/' + username}>{username}</a></div>
    <div className="camper__alltime-points">{alltime}</div>
    <div className="camper__recent-points">{recent}</div>
  </div>
)

export default TableAlltime;
