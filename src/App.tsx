import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// The site used to have separate pages; send old links to the matching section.
const legacyRoutes: Record<string, string> = {
  about: "about",
  research: "research",
  publications: "publications",
  skills: "experience",
  contact: "contact",
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      {Object.entries(legacyRoutes).map(([path, id]) => (
        <Route key={path} path={`/${path}`} element={<Navigate to={`/#${id}`} replace />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
