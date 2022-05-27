import React from 'react';
import ReactDOM from 'react-dom';
import 'react-test-renderer';

import ReportButton from './ReportButton.jsx';

it('renders without crashing', function() {
  const div = document.createElement("div");
  ReactDOM.render(<ReportButton />, div);
})