import type { Component, JSX } from 'solid-js';

type ButtonPreset = 'primary' | 'secondary';

const Button: Component<
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    preset: ButtonPreset;
  }
> = ({ children, ...restButtonProps }) => {
  return <button {...restButtonProps}>{children}</button>;
};

export default Button;
