import { Component, JSX } from 'solid-js';
import { Show } from 'solid-js';

const TextInput: Component<
  Partial<JSX.InputHTMLAttributes<HTMLInputElement>> & {
    label: string;
    required?: boolean;
    onInput: (value: any) => void;
    sideEffect?: (formSetter: any) => void;
  }
> = ({
  label,
  required,
  placeholder = 'Search anything',
  onInput = () => {},
  ...inputProps
}) => {
  function handleChange(
    event: Event & { currentTarget: HTMLInputElement; target: Element }
  ) {
    event.preventDefault();
    onInput(event.currentTarget.value);
  }

  return (
    <div class="relative">
      <span class="block pl-1 font-bold text-left text-sm">
        {label}
        <Show when={required}>
          <span class="text-red-500">*</span>
        </Show>
      </span>
      <input
        placeholder={placeholder}
        oninput={handleChange}
        class={`
        w-full p-2 border bg-slate-50 border-slate-200 rounded-lg 
        placeholder:italic placeholder:text-slate-400  
        focus-visible:outline-none focus:border-blue-400
        `}
        {...inputProps}
      />
    </div>
  );
};

export default TextInput;
