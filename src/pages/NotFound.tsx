import Layout from "@/components/Layout";

const NotFound = () => (
  <Layout>
    <section className="page-container flex min-h-[60vh] flex-col justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-4xl font-medium text-foreground">This page doesn't exist.</h1>
      <p className="mt-4 text-muted-foreground">
        <a href="/" className="link">
          Return to the homepage
        </a>
      </p>
    </section>
  </Layout>
);

export default NotFound;
