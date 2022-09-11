import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styling/RatingsAndReviews.css';

import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function RatingsAndReviews({ setModal }) {
  const [reviews, setReviews] = useState([]);
  const [currIdx, setCurrIdx] = useState(2);
  const [someReviews, setSomeReviews] = useState([]);
  const [meta, setMeta] = useState([]);
  const [selected, setSelected] = useState('Relevant');

  useEffect(() => {
    axios.get(`${process.env.API_URL}/reviews`, {
      params: {
        sort: selected,
        product_id: 40344,
        count: 10000,
      },
    })
      .then((res) => {
        setReviews(res.data.results);
        setSomeReviews(res.data.results.slice(0, 2));
      })
      .catch((err) => { console.log(err); });
  }, [selected]);

  useEffect(() => {
    axios.get(`${process.env.API_URL}/reviews/meta`, {
      params: {
        product_id: 40344,
      },
    })
      .then((res) => {
        setMeta(res.data);
      })
      .catch((err) => { console.log(err); });
  }, []);

  const onClickMoreReviews = () => {
    const index = currIdx + 2;
    setCurrIdx(index);
    setSomeReviews(reviews.slice(0, index));
  };

  return (
    <section id="reviews">
      <div className="section-container">
        <h2>Ratings and Reviews</h2>
        <div className="mainPage">
          <div>
            <RatingBreakdown meta={meta} />
            <ProductBreakdown meta={meta} />
          </div>
          <div className="right">
            <ReviewsList
              reviews={reviews}
              someReviews={someReviews}
              meta={meta}
              setModal={setModal}
              selected={selected}
              setSelected={setSelected}
              onClick={onClickMoreReviews}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RatingsAndReviews;
