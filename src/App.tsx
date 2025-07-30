import "./theme.css";

import UseDocumentTitleExample from "./hooks/useDocumentTitle/UseDocumentTitleExample";
import UseDefaultExample from "./hooks/useDefault/UseDefaultExample";
import UseToggleExample from "./hooks/useToggle/UseToggleExample";
import UsePreviousExample from "./hooks/usePrevious/UsePreviousExample";
import UsePreferredLanguageExample from "./hooks/usePreferredLanguage/UsePreferredLanguageExample";

import Root from "./Root";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/useDocumentTitle" element={<UseDocumentTitleExample />} />
        <Route path="/useDefault" element={<UseDefaultExample />} />
        <Route path="/useToggle" element={<UseToggleExample />} />
        <Route path="/usePrevious" element={<UsePreviousExample />} />
        <Route
          path="/usePreferredLanguage"
          element={<UsePreferredLanguageExample />}
        />
      </Route>
    </Routes>
  );
}

export default App;
