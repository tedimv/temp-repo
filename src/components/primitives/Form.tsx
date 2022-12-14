import { Component, createResource, JSX } from 'solid-js';
import { createStore } from 'solid-js/store';

import FormLayout from './FormLayout';
import FormFooter from './FormFooter';

const validators = {
  isNotNull: (val: any) => (!!val ? null : 'Required')
};

type FormBrain = {
  registerField: (
    field: string,
    config?: {
      defaultValue?: any;
      validations?: Array<(fieldValue: any) => boolean>;
    }
  ) => {
    onInput: (value: any) => void;
    value: any;
    name: string;
  };
};

const Form: Component<{
  children: (formBrain: FormBrain) => JSX.Element;
  onSubmit: (formState: Record<string, any>) => void;
  onCancel: (args?: any) => void;
  Layout?: Component<{ formState: Record<string, any> }>;
}> = ({ children, onSubmit, onCancel, Layout = FormLayout }) => {
  const [state, setState] = createStore<Record<string, any>>({});

  function submitForm(e: SubmitEvent) {
    e.preventDefault();
    onSubmit(state);
  }

  const registerField: FormBrain['registerField'] = (
    field: string,
    config = {}
  ) => {
    const onInputField = (value: any) => setState(field, value);
    return {
      onInput: onInputField,
      value: state[field] ?? config?.defaultValue,
      name: field
    };
  };

  function onPressEnter(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit(state);
    }
  }

  // There's no point in using uncontrolled form components in solidjs
  return (
    <form onkeypress={onPressEnter} onsubmit={submitForm}>
      <Layout formState={state}>
        {children({ registerField })}
        <FormFooter onCancel={onCancel} />
      </Layout>
    </form>
  );
};

export default Form;
