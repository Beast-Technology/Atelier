import React, { useState, useEffect } from 'react';
import { DatePosted } from '../helper/Date.jsx';
import { Stars } from '../helper/Stars.jsx';

function ReviewTile({ review }) {
  const [clicked, setClicked] = useState(false);
  const [helpful, setHelpful] = useState(review.helpfulness);
  const [notHelpful, setNotHelpful] = useState(0);
  const [report, setReport] = useState(false);
  const [summary, setSummary] = useState(review.summary);
  const date = DatePosted(review.date);

  const onClickHelpfulYes = () => {
    setHelpful(helpful + 1);
    setClicked(true);
  };

  const onClickHelpfulNo = () => {
    setNotHelpful(notHelpful + 1);
    setClicked(true);
  };

  const onClickReport = () => {
    setReport(true);
  };

  return (
    <td id="reviewTile">
      <div className="tileRow1">
      <Stars rating={review.rating}/>
        <span className="nameDate">
          {/* If it's a user add a checkmark next to their name */}
          <svg xmlns="http://www.w3.org/2000/svg" className="verified" viewBox="0, 0, 50, 50"><path d="M17.3 45 13.5 38.5 5.95 36.95 6.8 29.6 2 24 6.8 18.45 5.95 11.1 13.5 9.55 17.3 3 24 6.1 30.7 3 34.55 9.55 42.05 11.1 41.2 18.45 46 24 41.2 29.6 42.05 36.95 34.55 38.5 30.7 45 24 41.9ZM24 24ZM21.85 30.65 33.2 19.4 30.95 17.35 21.85 26.35 17.1 21.4 14.8 23.65ZM18.65 41.05 24 38.8 29.5 41.05 32.85 36.05 38.7 34.55 38.1 28.6 42.15 24 38.1 19.3 38.7 13.35 32.85 11.95 29.4 6.95 24 9.2 18.5 6.95 15.15 11.95 9.3 13.35 9.9 19.3 5.85 24 9.9 28.6 9.3 34.65 15.15 36.05Z"/></svg>
          {review.reviewer_name}, {date}
        </span>
      </div>
      <div>
        {summary.length > 60
          ? <div>
          <h4 className="reviewSummary">{`${summary.slice(0, 60)}...`}</h4>
          <div>{summary.slice(60)}</div>
        </div>
          : <h4 className="reviewSummary">{summary}</h4> }
        <div>
          <p className="reviewBody">{review.body}</p>
        </div>
      </div>
      <div className="photos">
        {review.photos.map((pic) => (
          <img className="photo" src={`${pic.url}`}/>
        ))}
      </div>
      {review.recommend
      ? (<div className="recommendProduct">
          <svg xmlns="http://www.w3.org/2000/svg" className="check" viewBox="0, 0, 50, 50"><path d="M18.9 35.7 7.7 24.5 9.85 22.35 18.9 31.4 38.1 12.2 40.25 14.35Z"/></svg>
          I recommend this product</div>)
        : <div></div>}
      {review.response ? <h4>Response: {review.response}</h4> : <div></div>}
      <div className="tileBotRow">
        <div>Was this review helpful?</div>
        <span className="buttons" onClick={clicked ? console.log("Clicked Already") : onClickHelpfulYes}>Yes</span> ({helpful})
        <span className="buttons" onClick={clicked ? console.log("Clicked Already") : onClickHelpfulNo}>No</span> ({notHelpful})
        {report ? <span className="reported">Reported</span> : <span className="buttons" onClick={onClickReport}>Report</span>}
        <br />
      </div>
    </td>
  );
}

export default ReviewTile;
