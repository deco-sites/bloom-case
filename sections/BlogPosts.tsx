import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { ComponentChildren, Fragment } from "preact";
import { BlogPost } from "apps/blog/types.ts";
import { useId } from "../sdk/useId.ts";
import { useSection as useSection } from "@deco/deco/hooks";
export interface CTA {
  text?: string;
}
/** @title {{{title}}} */
export interface Post {
  url?: string;
  title?: string;
  author?: string;
  excerpt?: string;
  image?: ImageWidget;
  date?: string;
  readingTime?: string;
  tags?: string[];
}
export interface Props {
  cta?: CTA;
  posts?: BlogPost[] | null;
  pagination?: {
    /**
     * @title First page
     * @description Leave it as 0 to start from the first page
     */
    page?: number;
    /** @title items per page */
    perPage?: number;
  };
}
function Container({ children }: {
  children: ComponentChildren;
}) {
  return (
    <div class="w-[90%] mx-auto max-w-[1300px] lg:py-14 mx-2 py-12 text-sm">
      <div class="space-y-8">{children}</div>
    </div>
  );
}
export default function BlogPosts(
  {
    cta = { text: "Show more" },
    posts,
    pagination: { page = 0, perPage = 6 } = {},
  }: Props,
) {
  const from = perPage * page;
  const to = perPage * (page + 1);
  // It's boring to generate ids. Let's autogen them
  const postList = useId();
  // Get the HTMX link for this section
  const fetchMoreLink = useSection({
    // Renders this section with the next page
    props: {
      pagination: { perPage, page: page + 1 },
    },
  });
  function calculateReadingTime(words: number): string {
    const wordsPerMinute = 250;
    const estimatedTimeMinutes = words / wordsPerMinute;
    const roundedReadingTime = Math.round(estimatedTimeMinutes);
    return `${roundedReadingTime} min`;
  }
  const ContainerComponent = page === 0 ? Container : Fragment;
  return (
    <ContainerComponent>
      <>
        <div class="gap-3 md:gap-8 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2">
          {posts?.slice(from, to).map((post) => (
            <a
              href={`/produto/${post.slug}`}
              class="border-none border-secondary overflow-hidden rounded-lg"
            >
              <Image
                width={274}
                height={274}
                class="object-fit w-full"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image || ""}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="px-0 py-4 space-y-4">
                <div>
                  <h3 class="text-sm leading-[20px] text-black line-clamp-2">{post.title}</h3>
                  <p class="text-xs mt-4 text-gray-800">R$ {post.excerpt}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        {posts && to < posts.length && (
          <div class="flex justify-center w-full" id={postList}>
            <button
              hx-get={fetchMoreLink}
              hx-swap="outerHTML"
              hx-target={`#${postList}`}
              aria-label={cta.text}
              class="btn btn-primary"
            >
              <span class="inline [.htmx-request_&]:hidden">
                {cta.text}
              </span>
              <span class="loading loading-spinner hidden [.htmx-request_&]:block" />
            </button>
          </div>
        )}
      </>
    </ContainerComponent>
  );
}
