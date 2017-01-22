import React from 'react';
import {render} from 'react-dom';
import App from './App';

import './styles/style.scss';

let root = document.querySelector("#root");

render(
  <App name="React" />,
  root
)
