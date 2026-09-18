import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <a href="#main" className="skip-link">
      Skip to content
    </a>
    <Navbar />
    <main id="main" className="flex-1 pt-16">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
