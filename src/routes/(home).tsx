import { Outlet, A } from 'solid-start';

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <nav class="flex gap-2">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        <A href="/login" class="text-sky-600 hover:underline">
          Login
        </A>
      </nav>

      <Outlet />
    </main>
  );
}
