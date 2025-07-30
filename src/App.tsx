import "./theme.css";

import UseDocumentTitle from "./hooks/useDocumentTitle/UseDocumentTitleExample";
import UseDefault from "./hooks/useDefault/UseDefaultExample";
import Root from "./Root";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}></Route>
      <Route path="/useDocumentTitle" element={<UseDocumentTitle />} />
      <Route path="/useDefault" element={<UseDefault />} />
    </Routes>
  );
}

export default App;
