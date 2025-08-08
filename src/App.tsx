/// <reference types="react/experimental" />
import "./theme.css";

import Root from "./Root";
import { Routes, Route, useLocation } from "react-router";
import { lazy, useEffect } from "react";
import allHooks from "./allHooks";

const allElements = allHooks.map((hook) => ({
  path: `/${hook}`,
  element: lazy(() => import(`./hooks/${hook}/U${hook.slice(1)}Example.jsx`)),
}));

function App() {
  const location = useLocation();

  // This is a bit hacky and will only work in development. But it is alright for this example app
  //
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
        {allElements.map((element) => (
          <Route
            key={element.path}
            path={element.path}
            element={<element.element />}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
