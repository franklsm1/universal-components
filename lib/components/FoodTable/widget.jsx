import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import FoodTable from './FoodTable';

const generateClassName = createGenerateClassName({
  productionPrefix: 'FoodTable',
  seed: '1',
});

const widgetId = document.currentScript.dataset.id;
const widget = document.getElementById(widgetId);
const props = {
  ...widget.dataset,
  tableData: JSON.parse(widget.dataset.tableData || '[]'),
};

ReactDOM.render(
  (
    <StylesProvider generateClassName={generateClassName}>
      <FoodTable {...props} />
    </StylesProvider>
  ),
  widget,
);
