export default {
  title: "A beautiful library with SVG logos",
  titleTemplate: "%s - svgl",
  description: "A beautiful library with SVG logos. Free and open source.",
  defaultTitle: "svgl",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/icons/icon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/icons/apple-touch-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "apple-touch-icon",
      href: "/icons/apple-touch-icon-152x152.png",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      href: "/icons/apple-touch-icon-114x114.png",
      sizes: "114x114",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "preload",
      href: "/fonts/Inter-Regular.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ],
  openGraph: {
    site_name: "svgl - A beautiful library with SVG logos",
    url: "https://svgl.vercel.app/",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/images/banner.png",
        width: 1920,
        height: 1080,
        alt: "svgl - A beautiful library with SVG logos",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    handle: "@pheralb_",
    site: "@pheralb_",
    cardType: "summary_large_image",
  },
};
