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
          <h2>Free Tailwind Components</h2>
        </div>
        <div>&nbsp;</div>
        <hr />
        <div>&nbsp;</div>
        <div>
          <div class="pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl ring-2 ring-indigo-600">
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
            <div class="mt-1 ">Last message sent an hour ago</div>
            <div class="mt-6 font-medium">621 users</div>
          </div>
        </div>
      </div>
    </>
  );
}
