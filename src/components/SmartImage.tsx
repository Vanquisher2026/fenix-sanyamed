/**
 * SmartImage — <img> с автоматическим WebP-fallback.
 *
 * Если в /public для файла есть .webp версия (наша optimize_images.py их
 * создаёт рядом), отдаёт её. Иначе — оригинал (JPEG/PNG).
 *
 * Использовать вместо <img src="/images/..."> чтобы получить −30..70%
 * веса картинки без рефакторинга вызовов.
 */
import React from "react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
};

function toWebp(src: string): string {
  if (src.endsWith(".webp")) return src;
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}

export default function SmartImage(props: Props) {
  const {
    src,
    alt,
    width,
    height,
    loading = "lazy",
    decoding = "async",
    fetchPriority,
    className,
    style,
    sizes,
  } = props;

  // Если файл уже .webp, не заворачиваем в <picture>
  const webp = toWebp(src);
  const isWebpDifferent = webp !== src;

  const imgProps = {
    src,
    alt,
    width,
    height,
    loading,
    decoding,
    className,
    style,
    sizes,
    fetchPriority,
  } as React.ImgHTMLAttributes<HTMLImageElement>;

  if (!isWebpDifferent) {
    return <img {...imgProps} />;
  }

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img {...imgProps} />
    </picture>
  );
}
