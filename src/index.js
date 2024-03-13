import React from 'react';
import { render } from 'react-dom';
import App from "./App";

const app = document.getElementById('app');

const init = () => {
  render(
    <App />,
    app,
  );

  if (module.hot) {
    module.hot.accept();
  }
};

init();
