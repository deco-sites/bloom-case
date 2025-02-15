import { ImageWidget } from 'apps/admin/widgets.ts';

interface Differential {
  /**
   * @description Title of the differential
   */
  title: string;
  /**
   * @description Description of the differential
   * @format textarea
   */
  description: string;
  /**
   * @description Icon for the differential
   */
  icon: ImageWidget;
}

interface Props {
  /**
   * @description Main title for the benefits section
   */
  mainTitle?: string;
  showTitle: boolean;
  /**
   * @description Background color of the section
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description Text color for the section
   * @format color-input
   */
  textColor?: string;
  /**
   * @description List of differentials
   */
  differentials: Differential[];
}

export default function Benefits({
  mainTitle = "Nossos Diferenciais",
  showTitle = true,
  backgroundColor = "#f8f9fa",
  textColor = "#333333",
  differentials = [
    {
      title: "Quality",
      description: "We ensure the highest quality in all our products and services.",
      icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
    },
    {
      title: "Innovation",
      description: "We're constantly innovating to bring you the latest and best solutions.",
      icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
    },
    {
      title: "Customer Service",
      description: "Our dedicated team ensures exceptional customer service at all times.",
      icon: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
    }
  ]
}: Props) {
  return (
    <section style={{ backgroundColor, color: textColor }} class="py-16 px-4">
      <div class="container mx-auto">
        {showTitle && <h2 class="text-3xl font-bold text-center mb-12">{mainTitle}</h2> }
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div key={index} class="flex flex-col items-center text-center">
              <img src={differential.icon} alt={differential.title} class="w-[75px] h-[75px] mb-4 border border-black rounded-2xl" />
              <h3 class="text-xl font-semibold mb-2">{differential.title}</h3>
              <p class="text-sm">{differential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}