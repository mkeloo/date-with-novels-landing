// app/page.tsx (Server Component by default)

import HomeClient from "@/components/HomeClient";

// Export SEO metadata for this route
export const metadata = {
  title: "DateWithNovels — Coming Soon!",
  description:
    "Sign up to be the first to know when we launch our handcrafted chunky blankets, keychains, and more!",
  openGraph: {
    title: "DateWithNovels — Coming Soon!",
    description:
      "Discover handcrafted chunky blankets, unique keychains, and exciting experiences like 'Blind Date with a Book'! Sign up for updates or visit our Etsy store.",
    url: "https://www.etsy.com/shop/DateWithNovels",
    siteName: "DateWithNovels",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "CrafteDesignz logo and handcrafted products",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}