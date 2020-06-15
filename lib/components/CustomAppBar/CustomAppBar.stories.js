import { createCodeNote, createScript, ROOT_URL } from '../../utils/storybookHelpers';

export default { title: 'Custom App Bar' };

const appDrawerSrc = `${ROOT_URL}/CustomAppBar.js`;

/*
  Default Blue Drawer Background
 */
const createBlueCustomAppBarScript = () => {
  const script = createScript();
  script.src = appDrawerSrc;
  return script;
};

export const BlueCustomAppBar = () => createBlueCustomAppBarScript();
BlueCustomAppBar.story = {
  parameters: { notes: createCodeNote(createBlueCustomAppBarScript()) },
};

/*
  Green Drawer Background
 */
const createGreenCustomAppBarScript = () => {
  const script = createScript();
  script.dataset.color = 'green';
  script.dataset.title = 'Green Title';
  script.src = appDrawerSrc;
  return script;
};

export const GreenCustomAppBar = () => createGreenCustomAppBarScript();
GreenCustomAppBar.story = {
  parameters: { notes: createCodeNote(createGreenCustomAppBarScript()) },
};

/*
  Orange Drawer Background
 */
const createOrangeCustomAppBarScript = () => {
  const script = createScript();
  script.dataset.color = 'orange';
  script.dataset.title = 'Orange Title';
  script.src = appDrawerSrc;
  return script;
};

export const OrangeCustomAppBar = () => createOrangeCustomAppBarScript();
OrangeCustomAppBar.story = {
  parameters: { notes: createCodeNote(createOrangeCustomAppBarScript()) },
};
