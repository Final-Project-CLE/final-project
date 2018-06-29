import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Params = ({ match }) => (
  { id: match.params.id - 1 }
);

export default Params;