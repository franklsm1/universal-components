import { createCodeNote, createScript, ROOT_URL } from '../../utils/storybookHelpers';

export default { title: 'Card using project image' };

const reactCardSrc = `${ROOT_URL}/ReactCard.js`;

/*
  Orange React Card
 */
const createOrangeReactCardScript = () => {
  const script = createScript();
  const widget = document.getElementById(script.dataset.id);
  widget.dataset.cardColor='orange';
  script.src = reactCardSrc;
  return script;
};

export const OrangeReactCard = () => createOrangeReactCardScript();
OrangeReactCard.story = {
  parameters: { notes: createCodeNote(createOrangeReactCardScript()) },
};
