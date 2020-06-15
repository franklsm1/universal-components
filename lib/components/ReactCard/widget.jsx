import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import ReactCard from './ReactCard';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ReactCard',
  seed: '2',
});

const widgetId = document.currentScript.dataset.id;
delete document.currentScript.dataset.id;

ReactDOM.render(
  (
    <StylesProvider generateClassName={generateClassName}>
      <ReactCard {...document.currentScript.dataset} />
    </StylesProvider>
  ),
  document.getElementById(widgetId),
);
