import ClientHome from "./ClientHome";
import { fetchTistoryPosts } from "@/lib/tistory";

export default async function Home() {
  const writings = await fetchTistoryPosts();

  return <ClientHome writings={writings} />;
}
