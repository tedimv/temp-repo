import { Outlet, A } from 'solid-start';
import Button from '~/components/primitives/Button';
import Form from '~/components/primitives/Form';
import TextInput from '~/components/primitives/TextInput';

export default function Home() {
  console.log('starting');
  setTimeout(() => console.log('ending'), 2000);

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <nav class="flex gap-2">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        <A href="/login/23" class="text-sky-600 hover:underline">
          To single item
        </A>
      </nav>

      <Form onSubmit={console.log}>
        {({ registerField }) => {
          console.log('asd');
          return (
            <div class="flex flex-col gap-3">
              <TextInput
                required
                label="Username"
                placeholder="Unique username"
                {...registerField('username')}
              />
              <TextInput
                required
                label="Password"
                placeholder="Complex password"
                type="password"
                {...registerField('password')}
              />
              <TextInput
                required
                label="Repeat Password"
                placeholder="Same as above"
                type="password"
                {...registerField('repeatPassword')}
              />
              <Button>Submit</Button>
            </div>
          );
        }}
      </Form>
    </main>
  );
}
