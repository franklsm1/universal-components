import { createCodeNote, createScript, ROOT_URL } from '../../utils/storybookHelpers';

export default { title: 'Food Table' };

const appDrawerSrc = `${ROOT_URL}/FoodTable.js`;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

/*
  Desert Food Table
 */
const desertDataRows = [
  createData('Frozen yogurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const createDesertFoodTableScript = () => {
  const script = createScript();
  const widget = document.getElementById(script.dataset.id);
  widget.dataset.tableData = JSON.stringify(desertDataRows);
  script.src = appDrawerSrc;
  return script;
};

export const DesertFoodTable = () => createDesertFoodTableScript();
DesertFoodTable.story = {
  parameters: { notes: createCodeNote(createDesertFoodTableScript()) },
};

/*
  Breakfast Food Table
 */
const breakfastDataRows = [
  createData('Crescent', 356, 16.0, 49, 3.9),
  createData('Pancake', 159, 6.0, 24, 4.0),
  createData('Bacon', 262, 16.0, 24, 6.0),
  createData('Egg Sandwich', 305, 3.7, 67, 4.3),
  createData('Waffle', 237, 9.0, 37, 4.3),
];

const createBreakfastFoodTableScript = () => {
  const script = createScript();
  const widget = document.getElementById(script.dataset.id);
  widget.dataset.tableData = JSON.stringify(breakfastDataRows);
  script.src = appDrawerSrc;
  return script;
};

export const BreakfastFoodTable = () => createBreakfastFoodTableScript();
BreakfastFoodTable.story = {
  parameters: { notes: createCodeNote(createBreakfastFoodTableScript()) },
};
