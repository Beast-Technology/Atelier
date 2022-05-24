import React from 'react';

export default function AnswerListEntry() {
  return (
    <li className="answer-content">
      <p className="answer-text">Fusce augue eros, laoreet et scelerisque non, pretium sit amet augue. In hac habitasse platea dictumst. Ut dui nunc, iaculis et magna non, feugiat aliquam elit.</p>

      <div className="answer-info">
        <span>by User1234, January 1, 2019</span>
        |
        <span className="helpful">Helpful? Yes (25)</span>
        |
        <span>Report</span>
      </div>
    </li>
  )
}