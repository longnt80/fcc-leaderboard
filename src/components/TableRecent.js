import React from 'react';
import PropTypes from 'prop-types';

const TableRecent = ({ username, recent, alltime, index, img }) => 
(
  <div className="camper">
    <div className="camper__rank">{index + 1}</div>
    <div className="camper__username"><img src={img} alt=""/><a href={'https://www.freecodecamp.org/' + username}>{username}</a></div>
    <div className="camper__recent-points">{recent}</div>
    <div className="camper__alltime-points">{alltime}</div>
  </div>
)

TableRecent.displayName = 'TableRecent';

TableRecent.propTypes = {
    username: PropTypes.string,
    img: PropTypes.string,
    recent: PropTypes.number,
    alltime: PropTypes.number,
    index: PropTypes.number,
};

export default TableRecent;

