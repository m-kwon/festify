import React from 'react';
import moment from 'moment';

import useStyles from './styles';

const BasicInfo = ({ festival }) => {
  const classes = useStyles();

  return (
    <div>
      <h1><strong>{festival.title}</strong></h1>
      <h2>{moment(festival.start_date).format('MMMM DD')} - {moment(festival.end_date).format('MMMM DD, YYYY')}</h2>
      <h2>{festival.venue} | {festival.city}, {festival.state}</h2>
    </div>
  )
}

export default BasicInfo;