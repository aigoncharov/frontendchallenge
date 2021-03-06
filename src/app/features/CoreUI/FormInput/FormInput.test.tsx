import React from 'react';
import { render, cleanup } from '@testing-library/react';

import FormInput from './FormInput';

const dummyText = 'label text';
const dummyError = 'some error';
const dummyName = 'Yoda';

describe('FormInput', () => {
  afterEach(cleanup);

  it('display label', () => {
    const { getByText } = render(
      <FormInput label={dummyText} name={dummyName} />,
    );
    const element = getByText(dummyText);
    expect(element).toBeInTheDocument();
  });

  it('displays error', () => {
    const { getByText } = render(
      <FormInput label={dummyText} error={dummyError} name={dummyName} />,
    );
    const element = getByText(dummyError);
    expect(element).toBeInTheDocument();
  });

  it('displays placeholder', () => {
    const { getByPlaceholderText } = render(
      <FormInput label={dummyText} placeholder={dummyError} name={dummyName} />,
    );
    const element = getByPlaceholderText(dummyError);
    expect(element).toBeInTheDocument();
  });
});
