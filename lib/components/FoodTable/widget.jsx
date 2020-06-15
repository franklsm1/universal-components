import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import FoodTable from './FoodTable';

const generateClassName = createGenerateClassName({
  productionPrefix: 'FoodTable',
  seed: '1',
});

const widgetId = document.currentScript.dataset.id;
delete document.currentScript.dataset.id;

const props = {
  ...document.currentScript.dataset,
  tableData: JSON.parse(document.currentScript.dataset.tableData || '[]'),
};

ReactDOM.render(
  (
    <StylesProvider generateClassName={generateClassName}>
      <FoodTable {...props} />
    </StylesProvider>
  ),
  document.getElementById(widgetId),
);
