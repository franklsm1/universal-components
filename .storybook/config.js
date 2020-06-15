import { configure, addDecorator } from '@storybook/html';
import { withNotes } from '@storybook/addon-notes';

addDecorator(withNotes);

configure( require.context('../lib', true, /\.stories\.js$/), module);
