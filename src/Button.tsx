import React, { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Provided test for the button. */
  children: React.ReactNode;
  /** Provided variant for the button.  */
  variant: 'primary' | 'secondary';
}

/** This is the button component*/
export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'purple' : 'blue',
        color: 'white',
        border: 'none',
        padding: '8px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
