import { type BlogPost, BlogPostPage } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { Device } from "site/loaders/Stock.ts";

interface Props {
  /**
   * @description The description of name.
   */
  page?: BlogPostPage | null;
  stock: Device[];
}

const PARAGRAPH_STYLES = "[&_p]:leading-[150%] [&_*]:mb-4";
const HEADING_STYLES =
  "[&>h1]:text-4xl [&>h1]:my-6 [&>h1]:font-bold [&>h2]:text-3xl [&>h2]:my-6 [&>h2]:font-bold [&>h3]:text-2xl [&>h3]:my-6 [&>h3]:font-bold [&>h4]:text-xl [&>h4]:my-6 [&>h4]:font-bold [&>h5]:text-lg [&>h5]:my-6 [&>h5]:font-bold [&>h6]:text-base [&>h6]:my-6 [&>h6]:font-bold";
const CODE_BLOCK_STYLES =
  "[&>pre]:bg-gray-100 [&>pre]:text-gray-800 [&>pre]:p-4 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:border [&>pre]:rounded-md [&>pre]:overflow-x-auto [&>code]:block [&>code]:w-full";
const IMAGE_STYLES = "[&_img]:rounded-2xl [&_img]:w-full [&_img]:my-12";
const BLOCKQUOTE_STYLES =
  "[&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-black [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:pl-6";

const CONTENT_STYLES =
  `max-w-3xl mx-auto ${PARAGRAPH_STYLES} ${HEADING_STYLES} ${CODE_BLOCK_STYLES} ${IMAGE_STYLES} ${BLOCKQUOTE_STYLES}`;

const DEFAULT_AVATAR =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e";

const DEFAULT_PROPS: BlogPost = {
  title: "Blog title heading will go here",
  excerpt: "Excerpt goes here",
  authors: [
    {
      name: "Full name",
      email: "author@deco.cx",
      avatar: DEFAULT_AVATAR,
    },
  ],
  categories: [],
  date: "2022-01-01",
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
  slug: "blog-post",
  content:
    '<h1>Heading 1</h1><p>This is a paragraph under <strong>Heading 1</strong>. It can contain <em>italic</em> text, <strong>bold</strong> text, and even <code>code snippets</code>.</p><h2>Introduction</h2><p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p><p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p><h2>Heading 2</h2><p>More text can be placed here. This section is under <strong>Heading 2</strong>.</p><h3>Heading 3 with Code Block</h3><p>This is an example of a code block:</p><pre><code>// This is a code block console.log("Hello, World!");</code></pre><h4>Heading 4 with Image</h4><p>Below is an image:</p><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9" alt="Description of Image"><p><strong>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</strong></p><p>Collaboratively deploy intuitive partnerships whereas customized e-markets. Energistically maintain performance based strategic theme areas whereas just in time methodologies. Phosfluorescently drive functionalized intellectual capital and.</p><blockquote>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."</blockquote><p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.<h2>Conclusion</h2><p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p><p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p><p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>',
};

function SocialIcons() {
  return (
    <div class="flex gap-2">
      <div class="bg-gray-200 rounded-full p-1">
        <Icon id="Link" size={24} />
      </div>
      <div class="bg-gray-200 rounded-full p-1">
        <Icon id="LinkedinOutline" size={24} />
      </div>
      <div class="bg-gray-200 rounded-full p-1">
        <Icon id="TwitterOutline" size={24} />
      </div>
      <div class="rounded-full bg-gray-200 p-1">
        <Icon id="FacebookOutline" size={24} />
      </div>
    </div>
  );
}

export default function BlogPost({ page, stock }: Props) {
  const { title, excerpt, image, date, content } = page?.post || DEFAULT_PROPS;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let quantityGeneralAvailable = 0;
  let modelsWithStock:string[] = [];

  stock.forEach((devices) => {
    devices.models.forEach((model) => {
      if (model.quantity > 0 && model.showOnSite) {
        quantityGeneralAvailable++;

        if (!modelsWithStock.includes(devices.name)) {
          modelsWithStock.push(devices.name);
        }
      }
    })
  })

  return (
    <div>
      <div className="w-[90%] mx-auto max-w-[1300px] md:flex md:flex-wrap md:justify-center items-start md:gap-4 container mx-auto px-4 md:px-0 py-4 lg:py-5">
        <Image
          className="w-full md:w-2/3 object-cover max-h-[500px] max-w-[500px] rounded-2xl"
          width={600}
          src={image || ""}
        />
        <div className="md:w-1/3">
          <div className="mt-4 w-full flex flex-col gap-5 max-w-3xl lg:mx-auto">
            <h1 className="text-xl font-normal uppercase">{title}</h1>
            <h2 className="text-xl font-bold mb-5">R$ {excerpt}</h2>
          </div>
          <div>
            <p class="text-sm mb-1">Disponível para: </p>
            <div class="flex gap-1 mb-4 flex-wrap">
              {
                modelsWithStock.map((device) => <div class="border border-gray-400 text-gray-400 w-fit p-1 text-xs">{device}</div>)
              }
            </div>
          </div>

          <a href="https://www.instagram.com/bloomcasebrasil/" target="_blank" class="bg-[#608c82] cursor-pointer text-white w-full md:w-[230px] text-center p-2 block">Comprar</a>
          <p className="text-xs text-gray-500 italic font-light mt-2">Após clicar em comprar, você será redirecionado(a) para nosso Instagram onde poderá seguir com a sua compra.</p>
        </div>
      </div>
      {  content.length > 10 && (
        <div class="w-[90%] mx-auto max-w-[1300px] my-10 block border-t border-[#e9e8e8] py-4">
            <h3 class="text-[#383838] w-fit bg-slate-100 p-2 rounded-lg">Descrição</h3>
            <p class="mt-6 text-[#929292]" dangerouslySetInnerHTML={{ __html: content }} ></p>
        </div>
      ) }
    </div>
  );
}
