import type { ImageWidget } from "apps/admin/widgets.ts";

import Image from "apps/website/components/Image.tsx";

export interface Props {
    text: string,
    icon: ImageWidget
}

export default function Tipbar({text, icon}: Props) {
    return (
        <div className="w-full bg-slate-300 fixed z-50 top-0">
            <div className="flex justify-center items-center gap-2 py-1">
                <Image src={icon} width={30} height={30} alt={""} />
                <p className="text-xs uppercase text-gray-800">{text}</p>
            </div>  
        </div>
    )
}