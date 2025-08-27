import "server-only";
import { notFound } from "next/navigation";

// منبع واحد زبان‌های مجاز
export const SUPPORTED_LOCALES = ["en", "fa"];

const loaders = Object.freeze({
  en: () => import("@locales/en.json").then((m) => m.default),
  fa: () => import("@locales/fa.json").then((m) => m.default),
});

export async function getDictionary(locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound(); 
  }
  return loaders[locale]();
}
