import React from 'react';
import ReactDOM from 'react-dom';

import ReportButton from './ReportButton.jsx';

it('renders without crashing', function() {
  const div = document.createElement("div");
  ReactDOM.render(<ReportButton />, div);
})
