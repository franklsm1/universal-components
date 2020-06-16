import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import CustomAppBar from './CustomAppBar';

const generateClassName = createGenerateClassName({
  productionPrefix: 'CustomAppBar',
  seed: '3',
});

const widgetId = document.currentScript.dataset.id;
const widget = document.getElementById(widgetId);

ReactDOM.render(
  (
    <StylesProvider generateClassName={generateClassName}>
      <CustomAppBar {...widget.dataset} />
    </StylesProvider>
  ),
  document.getElementById(widgetId),
);
