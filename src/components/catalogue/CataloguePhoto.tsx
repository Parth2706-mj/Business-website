import Image from "next/image";
import type { CatalogueImage } from "@/types";

interface CataloguePhotoProps {
  image: CatalogueImage;
  className?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
  decorative?: boolean;
}

export function CataloguePhoto({
  image,
  className = "h-52",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  zoom = false,
  decorative = false,
}: CataloguePhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-surface-container-high ${className}`}>
      <Image
        src={image.src}
        alt={decorative ? "" : image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${zoom ? "transition-transform duration-500 group-hover:scale-[1.04]" : ""}`}
      />
    </div>
  );
}
