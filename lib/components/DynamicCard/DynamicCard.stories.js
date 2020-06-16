import { createCodeNote, createScript, ROOT_URL } from '../../utils/storybookHelpers';

export default { title: 'Dynamic Card' };

const dynamicCardSrc = `${ROOT_URL}/DynamicCard.js`;
/*
  React Card
 */
const createReactCardScript = () => {
  const script = createScript();
  const widget = document.getElementById(script.dataset.id);
  widget.dataset.cardImage='https://reactjs.org/logo-og.png';
  widget.dataset.cardHeader='React';
  widget.dataset.cardSubText='My preferred JavaScript library for building user interfaces';
  widget.dataset.cardLink='https://reactjs.org/';
  script.src = dynamicCardSrc;
  return script;
};

export const ReactCard = () => createReactCardScript();
ReactCard.story = {
  parameters: { notes: createCodeNote(createReactCardScript()) },
};

/*
  Angular Card
 */
const createAngularCardScript = () => {
  const script = createScript();
  const widget = document.getElementById(script.dataset.id);
  widget.dataset.cardImage='https://banner2.cleanpng.com/20180420/sxw/kisspng-angularjs-ruby-on-rails-typescript-web-application-icon-hacker-5ad97b80139367.5630065415242023680802.jpg';
  widget.dataset.cardHeader='Angular';
  widget.dataset.cardSubText='Another JavaScript library for building user interfaces';
  widget.dataset.cardLink='https://angular.io/';
  script.src = dynamicCardSrc;
  return script;
};

export const AngularCard = () => createAngularCardScript();
AngularCard.story = {
  parameters: { notes: createCodeNote(createAngularCardScript()) },
};
