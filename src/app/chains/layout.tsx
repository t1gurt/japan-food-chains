import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "46 Japanese Chains | 2025 Guide | JapanChains",
  description: "Explore 46 chains classified by type. Reviews, menus, prices to help you choose where to eat in Japan.",
  keywords: "Japanese restaurant chains, Japan restaurant list, Japanese chains guide, eating in Japan",
  openGraph: {
    title: "46 Japanese Chains | 2025 Guide | JapanChains",
    description: "Explore 46 chains classified by type. Reviews, menus, prices to help you choose where to eat in Japan.",
    type: "website",
    locale: "en_US",
    siteName: "JapanChains - Your Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: "/chains"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ChainsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
