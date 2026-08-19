import { XMLParser } from "fast-xml-parser";
import type { WritingPost } from "@/types/writing";

const RSS_URL = "https://pooreumjung.tistory.com/rss";

// Tistory's RSS <description> is the full post body as entity-escaped HTML.
// We only ever show a short plain-text teaser on the card, never the raw body.
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function excerpt(html: string, maxLength = 80): string {
  const text = stripHtml(html);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

function formatDate(pubDate: string): string {
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

// Tistory writes categories like "Back-End/잇슈" — match the site's existing
// "Back-End / 잇슈" spacing convention.
function formatCategory(raw: string): string {
  return raw
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" / ");
}

const parser = new XMLParser({ ignoreAttributes: true });

// Fetches the most recent posts straight from the Tistory RSS feed, with
// Next.js ISR caching the result and refreshing it hourly — so the Writing
// section stays in sync with the blog without a manual data-entry step.
export async function fetchTistoryPosts(limit = 4): Promise<WritingPost[]> {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Tistory RSS responded ${res.status}`);

    const xml = await res.text();
    const feed = parser.parse(xml);
    const rawItems = feed?.rss?.channel?.item;
    const items = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : [];

    return items.slice(0, limit).map((item): WritingPost => {
      const rawCategories = item.category;
      const categories = Array.isArray(rawCategories)
        ? rawCategories
        : rawCategories
          ? [rawCategories]
          : [];
      const categoryStrings = categories.map((value: unknown) => String(value).trim());

      const tags = categoryStrings
        .slice(1)
        .filter((tag: string) => tag.length > 0 && tag.length <= 20)
        .filter((tag: string, index: number, arr: string[]) => arr.indexOf(tag) === index)
        .slice(0, 4);

      return {
        date: formatDate(String(item.pubDate ?? "")),
        category: categoryStrings[0] ? formatCategory(categoryStrings[0]) : "Back-End",
        title: String(item.title ?? "").trim(),
        text: excerpt(String(item.description ?? "")),
        tags,
        href: String(item.link ?? "").trim(),
      };
    });
  } catch (error) {
    console.error("Failed to fetch Tistory RSS feed:", error);
    return [];
  }
}
