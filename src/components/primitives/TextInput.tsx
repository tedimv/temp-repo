import type { Component, JSX } from 'solid-js';
import { Show } from 'solid-js';

const TextInput: Component<
  Partial<JSX.InputHTMLAttributes<HTMLInputElement>> & {
    label: string;
    required?: boolean;
    onChange: (value: any) => void
  }
> = ({
  label,
  required,
  placeholder = 'Search anything',
  onChange,
  ...inputProps
}) => {
  return (
    <div class="relative">
      <span class="block pl-1 font-bold text-left text-sm">
        {label}
        <Show when={required}>
          <span class="text-red-500">*</span>
        </Show>
      </span>
      <input
        class={`
        w-full p-2 border bg-slate-50 border-slate-200 rounded-lg 
        placeholder:italic placeholder:text-slate-400  
        focus-visible:outline-none focus:border-blue-400
        `}
        placeholder={placeholder}
        onchange={e => onChange(e.currentTarget.value)}
        {...inputProps}
      />
    </div>
  );
};

export default TextInput;
