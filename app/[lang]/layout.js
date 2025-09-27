import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { getDictionary } from "@lib/utils/dictionaries";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fa" }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title = dict?.meta?.title || (lang === "fa" ? "پژمان کیامهر | توسعه‌دهنده فرانت‌اند Next.js و React" : "Pejman Kiamehr | Front-End Developer (Next.js & React)");

  const description =
    dict?.meta?.description ||
    (lang === "fa"
      ? "پورتفولیوی پژمان کیامهر؛ توسعه‌دهنده فرانت‌اند متخصص در Next.js و React. مشاهده نمونه‌کارها و مهارت‌ها."
      : "Portfolio of Pejman Kiamehr, a front-end developer skilled in Next.js and React. View my projects and skills.");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kiamehr.dev";
  const imageFile = "/pejman-kiamehr-profile.jpg";
  const imageUrl = new URL(imageFile, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: lang === "fa" ? "پژمان کیامهر, توسعه‌دهنده فرانت‌اند, Next.js, React, پورتفولیو" : "Pejman Kiamehr, Front-End Developer, Next.js, React, Portfolio, web development",
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: { en: `${siteUrl}/en`, fa: `${siteUrl}/fa` },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${lang}`,
      siteName: lang === "fa" ? "پژمان کیامهر" : "Pejman Kiamehr",
      locale: lang === "fa" ? "fa_IR" : "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: lang === "fa" ? "عکس پروفایل پژمان کیامهر توسعه‌دهنده فرانت‌اند" : "Pejman Kiamehr Front-End Developer profile photo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: imageUrl, alt: title }],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kiamehr.dev";
  const imageUrl = new URL("/pejman-kiamehr-profile.jpg", siteUrl).toString();

  return (
    <html lang={lang} dir={lang === "en" ? "ltr" : "rtl"}>
      <body className={`${lang === "fa" ? vazirmatn.variable : geistSans.variable} ${geistMono.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            className: "rounded-lg font-medium",
          }}
        />
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${siteUrl}#person`,
              name: lang === "fa" ? "پژمان کیامهر" : "Pejman Kiamehr",
              alternateName: lang === "fa" ? "Pejman Kiamehr" : "پژمان کیامهر",
              jobTitle: lang === "fa" ? "توسعه‌دهنده فرانت‌اند" : "Front-End Developer",
              url: `${siteUrl}/${lang}`,
              image: imageUrl,
              inLanguage: lang === "fa" ? "fa" : "en",
              sameAs: [
                "https://www.linkedin.com/in/pejmankiamehr", // ✅ لینک واقعی
                "https://github.com/pejmankiamehr", // ✅ لینک واقعی
              ], // ✅ اضافه شد
            }),
          }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: siteUrl,
              name: lang === "fa" ? "پورتفولیوی پژمان کیامهر" : "Pejman Kiamehr Portfolio",
              inLanguage: lang === "fa" ? "fa" : "en",
              publisher: { "@id": `${siteUrl}#person` },
            }),
          }}
        />
      </body>
    </html>
  );
}
