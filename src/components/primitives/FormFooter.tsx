import type { Component } from 'solid-js';

import Button from './Button';

const FormFooter: Component<{ onCancel: (...args: any) => void }> = ({
  onCancel
}) => {
  return (
    <div class="flex justify-end gap-2 mt-4">
      <Button class="text-sm text-white font-">Submit</Button>
      <Button class=" text-sm text-white" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default FormFooter;
