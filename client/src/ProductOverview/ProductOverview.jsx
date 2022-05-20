import React from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';

function ProductOverview() {

  return (
    <div>
      Product Overview
      <StarRating />
    </div>
  )
}

export default ProductOverview;