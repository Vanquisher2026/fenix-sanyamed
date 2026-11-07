import type { Metadata } from "next";

/**
 * Блог-постинг: генерирует JSON-LD Article/BlogPosting + BreadcrumbList.
 * Используется всеми статьями, чтобы AI-поисковики видели единый
 * стандартизованный объект статьи.
 */
export type BlogSchemaProps = {
  title: string;
  description: string;
  url: string;
  datePublished: string; // YYYY-MM-DD
  dateModified?: string; // YYYY-MM-DD
  inLanguage?: string;
  authorName?: string;
  imageUrl?: string;
  /** список пар «термин → пояснение», используется в keywords */
  keywords?: string[];
  /** slug раздела в URL */
  blogPath?: string;
  blogTitle?: string;
  /** Название тематического раздела статьи. По умолчанию — русское. */
  articleSection?: string;
  /** Подпись первого пункта хлебных крошек. По умолчанию — «Главная». */
  homeLabel?: string;
  /**
   * Карта hreflang-связей между переводами. Нужна, чтобы связка
   * blogMetadata() со spread в объекте metadata не затирала languages:
   * spread идёт после объявления alternates и перезаписывает его.
   */
  languages?: Record<string, string>;
};

const DEFAULTS = {
  inLanguage: "ru-RU",
  authorName: "Санаторий ТАЙЦЗИ",
  imageUrl: "https://www.fenix-sanyamed.com/og-image.jpg",
  blogPath: "/blog/",
  blogTitle: "Блог",
};

export function blogMetadata(
  props: BlogSchemaProps,
): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: props.languages
      ? { canonical: props.url, languages: props.languages }
      : { canonical: props.url },
    openGraph: {
      title: props.title,
      description: props.description,
      url: props.url,
      type: "article",
      locale: (props.inLanguage ?? DEFAULTS.inLanguage).replace("-", "_"),
      images: [{ url: props.imageUrl ?? DEFAULTS.imageUrl, width: 1200, height: 630 }],
    },
  };
}

export function BlogSchema(props: BlogSchemaProps) {
  const inLanguage = props.inLanguage ?? DEFAULTS.inLanguage;
  const authorName = props.authorName ?? DEFAULTS.authorName;
  const imageUrl = props.imageUrl ?? DEFAULTS.imageUrl;
  const blogPath = props.blogPath ?? DEFAULTS.blogPath;
  const blogTitle = props.blogTitle ?? DEFAULTS.blogTitle;
  const articleSection = props.articleSection ?? "Традиционная китайская медицина";
  const homeLabel = props.homeLabel ?? "Главная";

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${props.url}#article`,
    headline: props.title,
    description: props.description,
    inLanguage,
    mainEntityOfPage: { "@type": "WebPage", "@id": props.url },
    url: props.url,
    datePublished: props.datePublished,
    dateModified: props.dateModified ?? props.datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://www.fenix-sanyamed.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Санаторий ТАЙЦЗИ",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fenix-sanyamed.com/og-image.jpg",
      },
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    articleSection,
    keywords: props.keywords?.join(", "),
    isPartOf: {
      "@type": "Blog",
      name: blogTitle,
      url: `https://www.fenix-sanyamed.com${blogPath}`,
    },
    about: [
      { "@type": "Thing", name: articleSection },
      { "@type": "Place", name: "Санья, Хайнань, Китай" },
    ],
    spatialCoverage: { "@type": "Place", name: "Санья, Хайнань, Китай" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: "https://www.fenix-sanyamed.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: blogTitle,
        item: `https://www.fenix-sanyamed.com${blogPath}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: props.title,
        item: props.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
