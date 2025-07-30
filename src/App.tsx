import "./theme.css";

import UseDocumentTitle from "./hooks/useDocumentTitle/UseDocumentTitleExample";
import UseDefault from "./hooks/useDefault/UseDefaultExample";
import UseToggle from "./hooks/useToggle/UseToggleExample";

import Root from "./Root";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/useDocumentTitle" element={<UseDocumentTitle />} />
        <Route path="/useDefault" element={<UseDefault />} />
        <Route path="/useToggle" element={<UseToggle />} />
      </Route>
    </Routes>
  );
}

export default App;
