export default async function sitemap() {
  return [
    {
      url: "https://kiamehr.dev/en",
      lastModified: new Date(),
      alternates: { languages: { fa: "https://kiamehr.dev/fa" } },
    },
    {
      url: "https://kiamehr.dev/fa",
      lastModified: new Date(),
      alternates: { languages: { en: "https://kiamehr.dev/en" } },
    },
  ];
}