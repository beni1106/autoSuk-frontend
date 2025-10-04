

import Hero from "./components/hero";

export default function Home({ searchParams }) {
  const domain = searchParams?.domain || "default";

  console.log("Domain dari rewrite:", domain);

  return <Hero />;
}
