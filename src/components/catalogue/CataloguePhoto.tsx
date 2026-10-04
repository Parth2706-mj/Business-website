import Image from "next/image";
import type { CatalogueImage } from "@/types";

interface CataloguePhotoProps {
  image: CatalogueImage;
  className?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
  showCredit?: boolean;
}

export function CataloguePhoto({
  image,
  className = "h-52",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  zoom = false,
  showCredit = false,
}: CataloguePhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-surface-container-high ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${zoom ? "transition-transform duration-500 group-hover:scale-[1.04]" : ""}`}
      />
      {showCredit && (
        <span className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1 font-label text-[9px] uppercase tracking-[0.05em] text-white/90 truncate">
          {image.credit} · {image.license}
        </span>
      )}
    </div>
  );
}
