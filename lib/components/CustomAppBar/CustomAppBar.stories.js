import { createCodeNote, createScript, ROOT_URL } from '../../utils/storybookHelpers';

export default { title: 'Custom App Bar' };

const appDrawerSrc = `${ROOT_URL}/CustomAppBar.js`;

/*
  Default Blue Drawer Background
 */
const createDefaultBlueCustomAppBarScript = () => {
  const script = createScript();
  script.src = appDrawerSrc;
  return script;
};

export const DefaultBlueCustomAppBar = () => createDefaultBlueCustomAppBarScript();
DefaultBlueCustomAppBar.story = {
  parameters: { notes: createCodeNote(createDefaultBlueCustomAppBarScript()) },
};

/*
  Green Drawer Background
 */
const createGreenCustomAppBarScript = () => {
  const script = createScript();
  const widget = document.getElementById(script.dataset.id);
  widget.dataset.color = 'green';
  widget.dataset.title = 'Green Title';
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
  const widget = document.getElementById(script.dataset.id);
  widget.dataset.color = 'orange';
  widget.dataset.title = 'Orange Title';
  script.src = appDrawerSrc;
  return script;
};

export const OrangeCustomAppBar = () => createOrangeCustomAppBarScript();
OrangeCustomAppBar.story = {
  parameters: { notes: createCodeNote(createOrangeCustomAppBarScript()) },
};
