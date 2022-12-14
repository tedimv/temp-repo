import type { Component, JSX } from 'solid-js';

const FormLayout: Component<{ children: JSX.Element }> = ({ children }) => {
  return <div class="flex flex-col gap-3">{children}</div>;
};

export default FormLayout;
