import { About } from "@/components/sections/about";
import { Layout } from "@/components/layout/layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="pt-12">
        <About />
      </div>
    </Layout>
  );
}
