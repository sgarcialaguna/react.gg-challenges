import "./theme.css";

import Root from "./Root";
import { Routes, Route, useLocation, Router } from "react-router";
import { lazy, useEffect } from "react";

const UseDocumentTitle = lazy(
  () => import("./hooks/useDocumentTitle/UseDocumentTitleExample"),
);
const UseDefault = lazy(() => import("./hooks/useDefault/UseDefaultExample"));
const UseToggle = lazy(() => import("./hooks/useToggle/UseToggleExample"));
const UsePrevious = lazy(
  () => import("./hooks/usePrevious/UsePreviousExample"),
);
const UsePreferredLanguage = lazy(
  () => import("./hooks/usePreferredLanguage/UsePreferredLanguageExample"),
);
const UseFavicon = lazy(() => import("./hooks/useFavicon/UseFaviconExample"));
const UseCopyToClipboard = lazy(
  () => import("./hooks/useCopyToClipboard/UseCopyToClipboardExample"),
);

function App() {
  const location = useLocation();

  useEffect(() => {
    const routeStylesheets = Array.from(
      document.querySelectorAll<HTMLStyleElement>("style[data-vite-dev-id]"),
    ).filter((el) => !el.dataset.viteDevId?.includes("theme"));
    routeStylesheets.forEach((routeStylesheet) => {
      routeStylesheet.disabled = !routeStylesheet.dataset.viteDevId?.includes(
        location.pathname,
      );
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/useDocumentTitle" element={<UseDocumentTitle />} />
        <Route path="/useDefault" element={<UseDefault />} />
        <Route path="/useToggle" element={<UseToggle />} />
        <Route path="/usePrevious" element={<UsePrevious />} />
        <Route
          path="/usePreferredLanguage"
          element={<UsePreferredLanguage />}
        />
        <Route path="/useFavicon" element={<UseFavicon />} />
        <Route path="/useCopyToClipboard" element={<UseCopyToClipboard />} />
      </Route>
    </Routes>
  );
}

export default App;
