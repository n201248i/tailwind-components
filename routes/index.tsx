import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Components</title>
      </Head>
      <div class="container mx-auto py-4">
        <div>
          <h1 class="font-bold">Tailwind Components</h1>
          <h2>Unsplash for tailwind components</h2>
        </div>
        <div>&nbsp;</div>
        <div>
          <div class="pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-2 ring-indigo-600">
            <div class="flex justify-between">
              <div class="font-medium font-bold">Newsletter</div>
              <svg class="h-5 w-5 flex-none" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                  fill="#4F46E5"
                >
                </path>
              </svg>
            </div>
            <div class="mt-1 text-slate-700">Last message sent an hour ago</div>
            <div class="mt-6 font-medium text-slate-900">621 users</div>
          </div>
        </div>
      </div>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          huy Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
