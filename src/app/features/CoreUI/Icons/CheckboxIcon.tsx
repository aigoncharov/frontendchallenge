/* eslint-disable max-len */
import React, { FC } from 'react';

// TODO: Add proper handling of `disabled` and `error` props
interface Props {
  isActive?: boolean;
  hasHover?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  error?: boolean;
}

// TODO: Consider using `currentColor` for `fill` to have a single source of truth for our color palette
const CheckboxIcon: FC<Props> = ({ isActive, hasHover, onClick, disabled, error }) => {
  if (isActive) {
    let fill = '#3385FF';
    if (disabled) {
      fill = '#fff1f1';
    }
    // We don't have to account for the error state here because the only reason for a checkbox to be invalid
    // is when it's required (say, user agreement), but not checked.

    return (
      <svg onClick={onClick} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M3.33333 2.5H16.6667C16.8877 2.5 17.0996 2.5878 17.2559 2.74408C17.4122 2.90036 17.5 3.11232 17.5 3.33333V16.6667C17.5 16.8877 17.4122 17.0996 17.2559 17.2559C17.0996 17.4122 16.8877 17.5 16.6667 17.5H3.33333C3.11232 17.5 2.90036 17.4122 2.74408 17.2559C2.5878 17.0996 2.5 16.8877 2.5 16.6667V3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5ZM9.16917 13.3333L15.0608 7.44083L13.8825 6.2625L9.16917 10.9767L6.81167 8.61917L5.63333 9.7975L9.16917 13.3333Z' fill={fill} />
      </svg>
    );
  }

  if (hasHover && !disabled) {
    return (
      <svg onClick={onClick} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M3.33333 2.5H16.6667C16.8877 2.5 17.0996 2.5878 17.2559 2.74408C17.4122 2.90036 17.5 3.11232 17.5 3.33333V16.6667C17.5 16.8877 17.4122 17.0996 17.2559 17.2559C17.0996 17.4122 16.8877 17.5 16.6667 17.5H3.33333C3.11232 17.5 2.90036 17.4122 2.74408 17.2559C2.5878 17.0996 2.5 16.8877 2.5 16.6667V3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5ZM4.16667 4.16667V15.8333H15.8333V4.16667H4.16667Z' fill='#6F88A2' />
      </svg>

    );
  }

  let fill = '#BFCADA';
  if (disabled) {
    fill = '#a5b1c4';
  }
  if (error) {
    fill = '#ff4e4e';
  }

  return (
    <svg onClick={onClick} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3.33333 2.5H16.6667C16.8877 2.5 17.0996 2.5878 17.2559 2.74408C17.4122 2.90036 17.5 3.11232 17.5 3.33333V16.6667C17.5 16.8877 17.4122 17.0996 17.2559 17.2559C17.0996 17.4122 16.8877 17.5 16.6667 17.5H3.33333C3.11232 17.5 2.90036 17.4122 2.74408 17.2559C2.5878 17.0996 2.5 16.8877 2.5 16.6667V3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5ZM4.16667 4.16667V15.8333H15.8333V4.16667H4.16667Z' fill={fill} />
    </svg>
  );
};

export default CheckboxIcon;
