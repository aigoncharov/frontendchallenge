import React, { FC, forwardRef, Ref, MouseEvent, useRef, useCallback } from 'react';
import classNames from 'classnames';
import useForceUpdate from 'use-force-update';

import styles from './Checkbox.module.scss';
import Label from '../Label/Label';
import CheckboxIcon from '../Icons/CheckboxIcon';
import useHover from '../../../../utils/hooks/useHover';
import useFocus from '../../../../utils/hooks/useFocus';
import useCombinedRefs from '../../../../utils/hooks/useCombinedRefs';

export interface CheckboxProps {
  /**
   * Label to show next to the checkbox
   */
  label: string;

  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Fired when checkbox `checked` prop changes
   */
  onChecked?: (e: MouseEvent<HTMLInputElement>) => void;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Sets error state
   */
  error?: boolean;

  /**
   * input className
   */
  className?: string;

  /**
   * Current state of the checkbox
   */
  checked?: boolean;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;
}

const Checkbox: FC<CheckboxProps> = forwardRef((props, externalReference) => {
  const { className, error, label, disabled, children, onChecked: onClick, ...otherProps } = props;

  const labelReference = useRef<HTMLLabelElement | null>(null);
  const hasHover = useHover(labelReference);

  const checkboxCombinedReference = useCombinedRefs(externalReference);
  const hasFocus = useFocus(checkboxCombinedReference);

  const forceUpdate = useForceUpdate();

  const onClickWrapped = useCallback((event: MouseEvent<HTMLInputElement>) => {
    forceUpdate();
    onClick?.(event);
  }, [onClick, forceUpdate]);

  return (
    <Label
      title={label}
      disabled={disabled}
      position='right'
      className={classNames(styles.container, className)}
      ref={labelReference}
    >
      <input
        type='checkbox'
        className={styles.checkbox}
        ref={checkboxCombinedReference}
        onClick={onClickWrapped}
        disabled={disabled}
        {...otherProps}
      />
      <CheckboxIcon
        hasHover={!disabled && (hasHover || hasFocus)}
        error={!!error}
        disabled={disabled}
        isActive={checkboxCombinedReference.current?.checked}
      />
      {children}
    </Label>
  );
});

export default Checkbox;
