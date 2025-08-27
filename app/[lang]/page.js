import { notFound } from "next/navigation";
import { getDictionary } from "@lib/utils/dictionaries";
import ClientWrapper from "@providers/ClientWrapper";

const SUPPORTED_LOCALES = ["en", "fa"];

export default async function Page({ params }) {
  const { lang } = await params;
  if (!SUPPORTED_LOCALES.includes(lang)) {
    notFound();
  }
  const dict = await getDictionary(lang);
  return <ClientWrapper lang={lang} dict={dict} />;
}
