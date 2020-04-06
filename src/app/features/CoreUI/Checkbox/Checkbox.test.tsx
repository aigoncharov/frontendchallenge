import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Checkbox from './Checkbox';

const name = 'Yoda';
const label = 'May force be with you';

describe('Checkbox', () => {
  afterEach(cleanup);

  it('handles change event', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <Checkbox label={label} name={name} onChecked={handleChange} />,
    );

    const checkbox = getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBeFalsy();

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);

    expect(checkbox.checked).toBeTruthy();

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(2);

    expect(checkbox.checked).toBeFalsy();
  });
});
