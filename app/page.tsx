// app/page.tsx (Server Component by default)

import HomeClient from "@/components/HomeClient";

// Export SEO metadata for this route
export const metadata = {
  metadataBase: new URL("https://datewithnovels.com"),
  title: "DateWithNovels — Coming Soon!",
  description:
    "SGet ready for our personalized Blind Date With a Book experience—featuring curated packages with cozy extras like themed tumblers and surprise goodies.",
  openGraph: {
    title: "DateWithNovels — Coming Soon!",
    description:
      "Get ready for our personalized Blind Date With a Book experience—featuring curated packages with cozy extras like themed tumblers and surprise goodies.",
    url: "https://www.etsy.com/shop/DateWithNovels",
    siteName: "DateWithNovels",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "DateWithNovels Logo",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}