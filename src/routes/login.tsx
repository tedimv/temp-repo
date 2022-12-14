import axios from 'axios';
import { A, useNavigate } from 'solid-start';
import Form from '~/components/primitives/Form';
import TextInput from '~/components/primitives/TextInput';

async function apiFn<FetchArgs extends Parameters<typeof fetch>[1]>(
  url: string,
  fetchArgs: FetchArgs
) {
  try {
    const response = await fetch(url, fetchArgs);
    console.log({ response });

    if (response.status === 302) {
      const navigate = useNavigate();
      console.log('asd');

      return navigate(response.url);
      // return window.location.href = response.url;
    }
  } catch (error) {}
}

export default function Login() {
  const navigate = useNavigate();

  async function login(formData: object) {
    try {
      // const response = await apiFn('/api/auth/login', {
      //   method: 'POST',
      //   body: JSON.stringify(formData)
      // });
      await axios.post('/api/auth/login', {});
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

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

      <Form onSubmit={login} onCancel={() => navigate('/')}>
        {({ registerField }) => (
          <>
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
          </>
        )}
      </Form>
    </main>
  );
}
