import React     from 'react';
import PropTypes from 'prop-types';

function Date (props) {
  return (
null
  );
}

Date.PropTypes = {
  date: PropTypes.string,
  isSelected: PropTypes.bool,
  isToday: PropTypes.bool,
  events: PropTypes.arrayOf( PropTypes.shape( {
                                                isIn: PropTypes.bool
                                              } ) )
};
Date.defaultProps = {
  isSelected: false,
  events: [],
};

export default Date