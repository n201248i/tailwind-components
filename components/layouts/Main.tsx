import { Head, HeadProps } from "$fresh/runtime.ts";
import { ComponentProps } from "https://esm.sh/v95/preact@10.11.0/src/index.d.ts";
import { ComponentChildren } from "https://esm.sh/v96/preact@10.11.0/src/index.d.ts";

export interface MainLayoutProps {
  title: string;
  children: ComponentChildren;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div class="container mx-auto px-4">
        <div class="py-4">
          <h1 class="font-bold">Tailwind Components</h1>
          <h2>The Wind Must Be Free</h2>
        </div>
        <hr />
        <div class="py-4">
          {props.children}
        </div>
      </div>
    </>
  );
}
