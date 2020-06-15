import { createCodeNote, createScript, ROOT_URL } from '../../utils/storybookHelpers';

export default { title: 'Dynamic Card' };

const dynamicCardSrc = `${ROOT_URL}/DynamicCard.js`;

/*
  React Card
 */
const createReactCardScript = () => {
  const script = createScript();
  script.dataset.cardImage='https://banner2.cleanpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg';
  script.dataset.cardHeader='React';
  script.dataset.cardSubText='My preferred JavaScript library for building user interfaces';
  script.dataset.cardLink='https://reactjs.org/';
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
  script.dataset.cardImage='https://banner2.cleanpng.com/20180420/sxw/kisspng-angularjs-ruby-on-rails-typescript-web-application-icon-hacker-5ad97b80139367.5630065415242023680802.jpg';
  script.dataset.cardHeader='Angular';
  script.dataset.cardSubText='Another JavaScript library for building user interfaces';
  script.dataset.cardLink='https://angular.io/';
  script.src = dynamicCardSrc;
  return script;
};

export const AngularCard = () => createAngularCardScript();
AngularCard.story = {
  parameters: { notes: createCodeNote(createAngularCardScript()) },
};
