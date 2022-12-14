import type { Component, JSX } from 'solid-js';

type ButtonPreset = 'primary' | 'secondary';

const Button: Component<
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    preset?: ButtonPreset;
    onClick?: (e: Event) => void;
  }
> = ({ children, onClick, class: className = '', ...restButtonProps }) => {
  function click(e: Event) {
    e.preventDefault;
    if (onClick) onClick(e);
  }

  return (
    <button
      class={`p-1.5 rounded-sm bg-slate-400 ${className}`}
      {...restButtonProps}
      onclick={click}
    >
      {children}
    </button>
  );
};

export default Button;
