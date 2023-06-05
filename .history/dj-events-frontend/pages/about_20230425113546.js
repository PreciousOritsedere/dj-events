import Link from "next/link";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is an app to find the latest DJ and musical events.</p>
      <p>Version: 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  );
}
