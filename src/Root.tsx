import { Outlet, useNavigate } from "react-router";

export default function Root() {
  const navigate = useNavigate();

  return (
    <>
      <select
        style={{ marginInline: "auto", marginTop: "2rem" }}
        onChange={(event) => navigate(event.target.value)}
      >
        <option value="/">Navigate to a hook</option>
        <option value="useDocumentTitle">useDocumentTitle</option>
        <option value="useDefault">useDefault</option>
      </select>
      <Outlet></Outlet>
    </>
  );
}
