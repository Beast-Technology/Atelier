import React, { useState, useEffect } from 'react';
import { DatePosted } from '../helper/Date.jsx';

function ReviewTile({ review }) {
  const [clicked, setClicked] = useState(false);
  const [helpful, setHelpful] = useState(review.helpfulness);
  const [report, setReport] = useState(false);
  const [summary, setSummary] = useState(review.summary);
  const date = DatePosted(review.date)

  if (summary.length > 60) {
    setSummary(summary.slice(0, 60) + "...");
  }

  const onClickHelpfulYes = () => {
    setHelpful(helpful + 1);
    setClicked(true);
  }

  const onClickHelpfulNo = () => {
    setHelpful(helpful - 1);
    setClicked(true);
  }

  const onClickReport = () => {
    alert("Report Recieved");
    setReport(true);
  }

  return (
    <td id="reviewTile">
      <div>
      Rating: {review.rating}
        <div>
          {/* If it's a user add a checkmark next to their name */}
          Username: {review.reviewer_name}
          <br />
          Date Posted: {date}
        </div>
      </div>
      <div>
        <h4>Summary: {summary}</h4>
        <div>
          <p>Review: {review.body}</p>
          {/* Add photo section here as well */}
        </div>
      </div>
      {review.recommend ? <div>I recommend this product</div> : <div></div>}
      {/* if response is true return else leave out */}
      {review.response ? <h4>Response: {review.response}</h4> : <div></div>}
      <div>
        <div>Was this review helpful?</div>
        <button onClick={clicked ? console.log("Clicked Already") : onClickHelpfulYes}>Yes</button>
        <button onClick={clicked ? console.log("Clicked Already") : onClickHelpfulNo}>No</button>
        {/* Report wasn't not listed in Atelier Docs */}
        <button onClick={onClickReport}>Report</button>
        <div>{helpful}</div>
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