import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Colors } from './Button';

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

storiesOf('Components/Button', module).add('variants', () => (
  <Button
    color={select('Color', colors, 'primary') as Colors}
    onClick={action('clicked')}
    disabled={boolean('Disabled', false)}
  >
    {text('Text', 'Hello Storybook')}
  </Button>
));
