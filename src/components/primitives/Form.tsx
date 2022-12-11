import { Component, createMemo, createSignal, JSX } from 'solid-js';
import { createMutable, createStore } from 'solid-js/store';
import TextInput from './TextInput';

const validators = {
  isNotNull: (val: any) => (!!val ? null : 'Required')
};

const Form: Component<{
  children: (formBrain: any) => JSX.Element;
  onSubmit: (formState: Record<string, any>) => void;
}> = ({ children, onSubmit }) => {
  const formState = createMutable<Record<string, any>>({});

  const [state, setState] = createStore<Record<string, any>>({});
  const [validations, setValidations] = createSignal<
    Partial<Record<keyof typeof validators, () => string | null>>
  >({});
  
  function submitForm(e: SubmitEvent) {
    e.preventDefault();
    onSubmit(formState);
  }

  function registerField(fieldName: string, defaultFieldState: any) {
    const onChangeField = (value: any) => formState[fieldName] = value;
    console.log(`Registering ${fieldName}`);

    return {
      onChange: onChangeField,
      value: formState[fieldName] ?? defaultFieldState,
      name: fieldName
    };
  }

  // There's no point in using uncontrolled form components in solidjs
  return <form onsubmit={submitForm}>{children({ registerField })}</form>;
};

export default Form;
