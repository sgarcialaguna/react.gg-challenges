import { Outlet, useLocation, useNavigate } from "react-router";

export default function Root() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <select
        style={{ marginInline: "auto", marginTop: "2rem" }}
        onChange={(event) => navigate(event.target.value)}
        defaultValue={location.pathname}
      >
        <option value="/">Navigate to a hook</option>
        <option value="/useDocumentTitle">useDocumentTitle</option>
        <option value="/useDefault">useDefault</option>
        <option value="/useToggle">useToggle</option>
        <option value="/usePrevious">usePrevious</option>
        <option value="/usePreferredLanguage">usePreferredLanguage</option>
      </select>
      <Outlet></Outlet>
    </>
  );
}
