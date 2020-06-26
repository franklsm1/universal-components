import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import DynamicCard from './DynamicCard';

const generateClassName = createGenerateClassName({
  productionPrefix: 'DynamicCard',
  seed: '2',
});

const widgetId = document.currentScript.dataset.id;
const widget = document.getElementById(widgetId);

ReactDOM.render(
  (
    <StylesProvider generateClassName={generateClassName}>
      <DynamicCard {...widget.dataset} />
    </StylesProvider>
  ),
  widget,
);
