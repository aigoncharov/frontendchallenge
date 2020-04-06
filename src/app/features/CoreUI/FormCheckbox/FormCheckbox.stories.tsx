import React from 'react';
import { action } from '@storybook/addon-actions';

import FormCheckbox from './FormCheckbox';
import '../../App/Root/Root.scss';

export default {
  component: FormCheckbox,
  title: 'FormCheckbox',
};

const name = 'Yoda';
const label = 'May force be with you';

export const normal = () => (
  <FormCheckbox onChecked={action('changed')} name={name} label={label} />
);

export const error = () => (
  <FormCheckbox error='May force be with you' onChecked={action('changed')} name={name} label={label} />
);

export const disabled = () => (
  <FormCheckbox
    disabled
    onChecked={action('changed')}
    name={name}
    label={label}
  />
);
