import React, { useState, useEffect } from 'react';
import { DatePosted } from '../helper/Date.jsx';
import { StarRatingSelect, StarRating } from '../helper/Stars.jsx';

function ReviewTile({ review }) {
  const [clicked, setClicked] = useState(false);
  const [helpful, setHelpful] = useState(review.helpfulness);
  const [notHelpful, setNotHelpful] = useState(0);
  const [report, setReport] = useState(false);
  const [summary, setSummary] = useState(review.summary);
  const date = DatePosted(review.date)

  const onClickHelpfulYes = () => {
    setHelpful(helpful + 1);
    setClicked(true);
  }

  const onClickHelpfulNo = () => {
    setNotHelpful(notHelpful + 1);
    setClicked(true);
  }

  const onClickReport = () => {
    alert("Report Recieved");
    setReport(true);
  }

  return (
    <td id="reviewTile">
      <div className="tileRow1">
      <StarRating totalStars={5} />
        <span>
          {/* If it's a user add a checkmark next to their name */}
          {review.reviewer_name}, {date}
        </span>
      </div>
      <div>
        {summary.length > 60 ?
        <div>
          <h4 className="reviewSummary">{`${summary.slice(0, 60)}...`}</h4>
          <div>{summary.slice(60)}</div>
        </div>
          : <h4 className="reviewSummary">{summary}</h4> }
        <div>
          <p className="reviewBody">{review.body}</p>
          {/* Add photo section here as well */}
        </div>
      </div>
      {review.recommend ? <div className="recommendProduct">I recommend this product</div> : <div></div>}
      {/* if response is true return else leave out */}
      {review.response ? <h4>Response: {review.response}</h4> : <div></div>}
      <div>
        <div>Was this review helpful?</div>
        <button onClick={clicked ? console.log("Clicked Already") : onClickHelpfulYes}>Yes</button> {helpful}
        <button onClick={clicked ? console.log("Clicked Already") : onClickHelpfulNo}>No</button> {notHelpful}
        {/* Report wasn't not listed in Atelier Docs */}
        {report ? <> Reported</> : <button onClick={onClickReport}>Report</button>}
        <br />
      </div>
    </td>
  );
}

export default ReviewTile;


// -star rating
// -date of review
// -review summary
// -review body
// -recommend
// -reviewer name
// -response to review
// -rating helpfulness