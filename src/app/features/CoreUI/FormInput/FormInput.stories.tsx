import React from 'react';
import { action } from '@storybook/addon-actions';

import FormInput from './FormInput';
import '../../App/Root/Root.scss';

export default {
  component: FormInput,
  title: 'Form Input',
};

const name = 'Yoda';

export const normal = () => (
  <FormInput name={name} label='normal' onChange={action('changed')} />
);

export const fullWidth = () => (
  <FormInput name={name} label='Full Width' fillWidth onChange={action('changed')} />
);

export const withPlaceholder = () => (
  <FormInput name={name} label='With Placeholder' placeholder='FormInput...' onChange={action('changed')} />
);

export const error = () => (
  <FormInput name={name} label='Error' value='FormInput...' error='Error Label' onChange={action('changed')} />
);

export const disabled = () => (
  <FormInput
    name={name}
    label='Disabled Text'
    value='Disabled Text'
    disabled
    onChange={action('changed')}
  />
);
