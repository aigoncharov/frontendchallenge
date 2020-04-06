import React, { FC, forwardRef } from 'react';
// type-zoo provides only types, it's not required in production
// eslint-disable-next-line import/no-extraneous-dependencies
import { Overwrite } from 'type-zoo';

import styles from './FormCheckbox.module.scss';
import AlertCircleIcon from '../Icons/AlertCircleIcon';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';

type Props = Overwrite<CheckboxProps, {
  /**
   * Identifier for form submit
   */
  name: string;
  /**
   * Displays error msg underneath the input field
   */
  error?: string;
}>;

const FormCheckbox: FC<Props> = forwardRef((props, ref) => {
  const { error, ...otherProps } = props;

  const errorLabel = error && (
    <div className={styles.errorLabel}>
      {error}
      <AlertCircleIcon />
    </div>
  );

  return (
    <Checkbox {...otherProps} error={!!error} ref={ref} className={styles.container}>
      {errorLabel}
    </Checkbox>
  );
});

export default FormCheckbox;
