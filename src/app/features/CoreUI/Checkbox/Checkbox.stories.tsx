import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import '../../App/Root/Root.scss';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const normal = () => (
  <Checkbox onChecked={action('changed')} label='Yoda' />
);

export const error = () => (
  <Checkbox error onChecked={action('changed')} label='Yoda' />
);

export const disabled = () => (
  <Checkbox
    disabled
    onChecked={action('changed')}
    label='Yoda'
  />
);
